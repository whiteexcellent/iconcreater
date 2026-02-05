// ============================================================================
// SVG VALIDATOR & SANITIZER - SECURITY FIRST
// Validates and sanitizes imported SVG files to prevent XSS attacks
// ============================================================================

// Security limits
export const SECURITY_LIMITS = {
    MAX_FILE_SIZE: 50 * 1024,        // 50KB maximum
    MAX_ELEMENTS: 500,                // Maximum SVG elements
    MAX_PATH_LENGTH: 5000,            // Maximum path data length
    MAX_ATTR_LENGTH: 1000,            // Maximum attribute value length
    MAX_DEPTH: 10,                    // Maximum nesting depth
};

// Allowed SVG elements (whitelist approach)
const ALLOWED_TAGS = new Set([
    'svg', 'g', 'path', 'rect', 'circle', 'ellipse',
    'line', 'polygon', 'polyline', 'defs', 'clipPath',
    'linearGradient', 'radialGradient', 'stop', 'mask'
]);

// Allowed attributes (whitelist approach)
const ALLOWED_ATTRS = new Set([
    // Core
    'id', 'class', 'style',
    // Presentation
    'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin',
    'stroke-dasharray', 'stroke-dashoffset', 'stroke-opacity', 'fill-opacity',
    'opacity', 'fill-rule', 'clip-rule', 'transform',
    // Geometry
    'd', 'x', 'y', 'x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'rx', 'ry',
    'width', 'height', 'points', 'viewBox', 'preserveAspectRatio',
    // Gradient
    'offset', 'stop-color', 'stop-opacity', 'gradientUnits', 'gradientTransform',
    // Clip/Mask
    'clip-path', 'mask',
    // xmlns
    'xmlns'
]);

// Blocked patterns (dangerous content)
const BLOCKED_PATTERNS = [
    /javascript:/gi,
    /data:/gi,
    /vbscript:/gi,
    /<script/gi,
    /on\w+\s*=/gi,       // Event handlers like onclick, onerror
    /expression\s*\(/gi,  // CSS expression
    /url\s*\(\s*["']?\s*javascript/gi,
    /&#/g,               // HTML entities (potential bypass)
    /\\/gi               // Escape sequences
];

/**
 * Validate SVG file before import
 * @param {File|string} input - File object or SVG string
 * @returns {Promise<{valid: boolean, error?: string, data?: string}>}
 */
export async function validateSVG(input) {
    try {
        let svgString;

        // Step 1: Get string content
        if (input instanceof File) {
            // File size check
            if (input.size > SECURITY_LIMITS.MAX_FILE_SIZE) {
                return { valid: false, error: `Dosya boyutu çok büyük (max ${SECURITY_LIMITS.MAX_FILE_SIZE / 1024}KB)` };
            }
            svgString = await input.text();
        } else if (typeof input === 'string') {
            if (input.length > SECURITY_LIMITS.MAX_FILE_SIZE) {
                return { valid: false, error: 'SVG içeriği çok büyük' };
            }
            svgString = input;
        } else {
            return { valid: false, error: 'Geçersiz input tipi' };
        }

        // Step 2: Check blocked patterns
        for (const pattern of BLOCKED_PATTERNS) {
            if (pattern.test(svgString)) {
                return { valid: false, error: 'Güvenlik ihlali: Zararlı içerik tespit edildi' };
            }
        }

        // Step 3: Parse as XML
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, 'image/svg+xml');

        // Check for parse errors
        const parseError = doc.querySelector('parsererror');
        if (parseError) {
            return { valid: false, error: 'Geçersiz SVG formatı' };
        }

        // Step 4: Validate root element
        const svg = doc.documentElement;
        if (svg.tagName.toLowerCase() !== 'svg') {
            return { valid: false, error: 'Kök element SVG değil' };
        }

        // Step 5: Validate and sanitize all elements
        const sanitizeResult = sanitizeElement(svg, 0);
        if (!sanitizeResult.valid) {
            return sanitizeResult;
        }

        // Step 6: Count elements
        const elementCount = svg.querySelectorAll('*').length;
        if (elementCount > SECURITY_LIMITS.MAX_ELEMENTS) {
            return { valid: false, error: `Çok fazla element (max ${SECURITY_LIMITS.MAX_ELEMENTS})` };
        }

        // Success - return sanitized SVG
        const serializer = new XMLSerializer();
        const sanitizedSVG = serializer.serializeToString(svg);

        return { valid: true, data: sanitizedSVG };

    } catch (error) {
        return { valid: false, error: `Beklenmeyen hata: ${error.message}` };
    }
}

/**
 * Recursively sanitize an element and its children
 */
function sanitizeElement(element, depth) {
    // Depth check
    if (depth > SECURITY_LIMITS.MAX_DEPTH) {
        return { valid: false, error: 'Çok derin element yapısı' };
    }

    const tagName = element.tagName.toLowerCase();

    // Check if tag is allowed
    if (!ALLOWED_TAGS.has(tagName)) {
        element.remove();
        return { valid: true }; // Removed, continue
    }

    // Sanitize attributes
    const attrsToRemove = [];
    for (const attr of element.attributes) {
        const attrName = attr.name.toLowerCase();

        // Remove if not in whitelist
        if (!ALLOWED_ATTRS.has(attrName)) {
            attrsToRemove.push(attr.name);
            continue;
        }

        // Check attribute value length
        if (attr.value.length > SECURITY_LIMITS.MAX_ATTR_LENGTH) {
            return { valid: false, error: `Attribute değeri çok uzun: ${attrName}` };
        }

        // Check path data length
        if (attrName === 'd' && attr.value.length > SECURITY_LIMITS.MAX_PATH_LENGTH) {
            return { valid: false, error: 'Path verisi çok uzun' };
        }

        // Check for dangerous patterns in attribute values
        for (const pattern of BLOCKED_PATTERNS) {
            if (pattern.test(attr.value)) {
                return { valid: false, error: 'Attribute değerinde zararlı içerik' };
            }
        }

        // Sanitize style attribute
        if (attrName === 'style') {
            element.setAttribute('style', sanitizeStyle(attr.value));
        }
    }

    // Remove blocked attributes
    attrsToRemove.forEach(attr => element.removeAttribute(attr));

    // Process children
    const children = Array.from(element.children);
    for (const child of children) {
        const result = sanitizeElement(child, depth + 1);
        if (!result.valid) {
            return result;
        }
    }

    return { valid: true };
}

/**
 * Sanitize CSS style string
 */
function sanitizeStyle(style) {
    // Remove dangerous CSS properties
    const dangerousProperties = [
        'behavior', 'expression', '-moz-binding', 'javascript'
    ];

    let sanitized = style;
    for (const prop of dangerousProperties) {
        const regex = new RegExp(prop, 'gi');
        sanitized = sanitized.replace(regex, '');
    }

    // Remove url() except for safe values
    sanitized = sanitized.replace(/url\s*\([^)]*\)/gi, '');

    return sanitized;
}

/**
 * Extract metadata from SVG comment
 * Format: <!--kicon:{"name":"...","category":"..."}-->
 */
export function extractMetadata(svgString) {
    const match = svgString.match(/<!--kicon:(.*?)-->/);
    if (match) {
        try {
            return JSON.parse(match[1]);
        } catch {
            return null;
        }
    }
    return null;
}

/**
 * Add metadata comment to SVG
 */
export function addMetadata(svgString, metadata) {
    const metaComment = `<!--kicon:${JSON.stringify(metadata)}-->`;
    // Insert after <?xml?> or at the start
    if (svgString.startsWith('<?xml')) {
        const endOfDecl = svgString.indexOf('?>') + 2;
        return svgString.slice(0, endOfDecl) + '\n' + metaComment + '\n' + svgString.slice(endOfDecl);
    }
    return metaComment + '\n' + svgString;
}
