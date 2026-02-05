// ============================================================================
// SVG EXPORTER - Converts canvas layers to SVG format
// ============================================================================

import { addMetadata } from './svgValidator';

/**
 * Export layers to SVG string
 * @param {Array} layers - Array of layer objects
 * @param {Object} options - Export options
 * @returns {string} SVG string
 */
export function exportToSVG(layers, options = {}) {
    const {
        width = 64,
        height = 64,
        name = 'custom_icon',
        category = 'custom',
        includeMetadata = true,
        optimize = true
    } = options;

    // Build SVG content
    let svgContent = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n`;

    // Process each visible layer
    layers.forEach((layer, index) => {
        if (!layer.visible) return;

        const layerOpacity = layer.opacity !== 1 ? ` opacity="${layer.opacity}"` : '';
        svgContent += `  <g id="${sanitizeId(layer.id)}"${layerOpacity}>\n`;

        // Process elements
        layer.elements.forEach(element => {
            svgContent += '    ' + elementToSVG(element) + '\n';
        });

        svgContent += '  </g>\n';
    });

    svgContent += '</svg>';

    // Optimize if requested
    if (optimize) {
        svgContent = optimizeSVG(svgContent);
    }

    // Add metadata
    if (includeMetadata) {
        svgContent = addMetadata(svgContent, { name, category });
    }

    return svgContent;
}

/**
 * Convert element object to SVG string
 */
function elementToSVG(element) {
    const commonAttrs = buildCommonAttrs(element);

    switch (element.type) {
        case 'path':
            return `<path d="${element.d || pointsToPath(element.points)}" ${commonAttrs}/>`;

        case 'rect':
            const rx = element.radius ? ` rx="${element.radius}"` : '';
            return `<rect x="${element.x}" y="${element.y}" width="${element.width}" height="${element.height}"${rx} ${commonAttrs}/>`;

        case 'circle':
            // Handle both center-based (standard SVG) and box-based (editor) storage
            let cx, cy, r;
            if (element.cx !== undefined) {
                cx = element.cx; cy = element.cy; r = element.r;
            } else {
                cx = element.x + element.width / 2;
                cy = element.y + element.height / 2;
                r = element.width / 2;
            }
            return `<circle cx="${cx}" cy="${cy}" r="${r}" ${commonAttrs}/>`;

        case 'ellipse':
            // Should support similar logic if ellipse tool added
            return `<ellipse cx="${element.cx}" cy="${element.cy}" rx="${element.rx}" ry="${element.ry}" ${commonAttrs}/>`;

        case 'line':
            // Handle standard SVG line properties or box-based
            let x1 = element.x1 !== undefined ? element.x1 : element.x;
            let y1 = element.y1 !== undefined ? element.y1 : element.y;
            let x2 = element.x2 !== undefined ? element.x2 : (element.x + element.width);
            let y2 = element.y2 !== undefined ? element.y2 : (element.y + element.height);

            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${commonAttrs}/>`;

        case 'polygon':
            return `<polygon points="${element.points}" ${commonAttrs}/>`;

        case 'polyline':
            return `<polyline points="${element.points}" ${commonAttrs}/>`;

        default:
            return '';
    }
}

/**
 * Build common SVG attributes
 */
function buildCommonAttrs(element) {
    const attrs = [];

    if (element.fill && element.fill !== 'none') {
        attrs.push(`fill="${element.fill}"`);
    } else if (!element.fill) {
        attrs.push('fill="none"');
    }

    if (element.stroke) {
        attrs.push(`stroke="${element.stroke}"`);
    }

    if (element.strokeWidth && element.strokeWidth !== 1) {
        attrs.push(`stroke-width="${element.strokeWidth}"`);
    }

    if (element.strokeLinecap && element.strokeLinecap !== 'butt') {
        attrs.push(`stroke-linecap="${element.strokeLinecap}"`);
    }

    if (element.strokeLinejoin && element.strokeLinejoin !== 'miter') {
        attrs.push(`stroke-linejoin="${element.strokeLinejoin}"`);
    }

    if (element.opacity && element.opacity !== 1) {
        attrs.push(`opacity="${element.opacity}"`);
    }

    if (element.transform) {
        attrs.push(`transform="${element.transform}"`);
    }

    return attrs.join(' ');
}

/**
 * Convert points array to path data
 */
export function pointsToPath(points) {
    if (!points || points.length < 2) return '';

    let d = `M${points[0].x} ${points[0].y}`;

    // Use quadratic curves for smooth paths
    for (let i = 1; i < points.length - 1; i++) {
        const midX = (points[i].x + points[i + 1].x) / 2;
        const midY = (points[i].y + points[i + 1].y) / 2;
        d += ` Q${points[i].x} ${points[i].y} ${midX} ${midY}`;
    }

    // Last point
    const last = points[points.length - 1];
    d += ` L${last.x} ${last.y}`;

    return d;
}

/**
 * Create path element from points
 */
export function createPathElement(points, options = {}) {
    return {
        type: 'path',
        d: pointsToPath(points),
        stroke: options.color || '#000000',
        strokeWidth: options.width || 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        fill: 'none',
        opacity: options.opacity || 1
    };
}

/**
 * Create rect element
 */
export function createRectElement(x, y, width, height, options = {}) {
    return {
        type: 'rect',
        x: Math.min(x, x + width),
        y: Math.min(y, y + height),
        width: Math.abs(width),
        height: Math.abs(height),
        radius: options.radius || 0,
        stroke: options.stroke ? options.strokeColor || '#000000' : null,
        strokeWidth: options.strokeWidth || 2,
        fill: options.fill ? options.fillColor || '#ffffff' : 'none',
        opacity: options.opacity || 1
    };
}

/**
 * Create circle/ellipse element
 */
export function createCircleElement(cx, cy, rx, ry, options = {}) {
    const isCircle = rx === ry;
    return {
        type: isCircle ? 'circle' : 'ellipse',
        cx,
        cy,
        ...(isCircle ? { r: rx } : { rx, ry }),
        stroke: options.stroke ? options.strokeColor || '#000000' : null,
        strokeWidth: options.strokeWidth || 2,
        fill: options.fill ? options.fillColor || '#ffffff' : 'none',
        opacity: options.opacity || 1
    };
}

/**
 * Create line element
 */
export function createLineElement(x1, y1, x2, y2, options = {}) {
    return {
        type: 'line',
        x1, y1, x2, y2,
        stroke: options.color || '#000000',
        strokeWidth: options.width || 2,
        strokeLinecap: 'round',
        opacity: options.opacity || 1
    };
}

/**
 * Optimize SVG string
 */
function optimizeSVG(svg) {
    return svg
        // Remove unnecessary whitespace
        .replace(/>\s+</g, '><')
        // Remove empty groups
        .replace(/<g[^>]*>\s*<\/g>/g, '')
        // Round numbers to 2 decimal places
        .replace(/(\d+\.\d{3,})/g, (match) => parseFloat(match).toFixed(2))
        // Remove unnecessary .00
        .replace(/\.00(?=\s|"|'|>)/g, '')
        // Format for readability
        .replace(/></g, '>\n<')
        .trim();
}

/**
 * Sanitize ID for SVG
 */
function sanitizeId(id) {
    return id.replace(/[^a-zA-Z0-9_-]/g, '_');
}

/**
 * Download SVG file
 */
export function downloadSVG(svgString, filename = 'icon.svg') {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename.endsWith('.svg') ? filename : `${filename}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export function copySVGToClipboard(svgString) {
    navigator.clipboard.writeText(svgString).then(() => {
        // showToast('SVG copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


