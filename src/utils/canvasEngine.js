// ============================================================================
// CANVAS ENGINE - Drawing primitives and utilities
// ============================================================================

/**
 * Draw a line between two points
 */
export function drawLine(ctx, x1, y1, x2, y2, options = {}) {
    const { color = '#000', width = 2, style = 'solid', opacity = 1 } = options;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (style === 'dashed') {
        ctx.setLineDash([width * 2, width]);
    } else if (style === 'dotted') {
        ctx.setLineDash([width, width]);
    }

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
}

/**
 * Draw checkered background pattern for transparency visualization
 */
export function drawCheckeredBackground(ctx, width, height, cellSize = 4) {
    const lightColor = '#ffffff';
    const darkColor = '#e0e0e0';

    for (let y = 0; y < height; y += cellSize) {
        for (let x = 0; x < width; x += cellSize) {
            const isEven = ((x / cellSize) + (y / cellSize)) % 2 === 0;
            ctx.fillStyle = isEven ? lightColor : darkColor;
            ctx.fillRect(x, y, cellSize, cellSize);
        }
    }
}

/**
 * Draw a rectangle
 */
export function drawRect(ctx, x, y, width, height, options = {}) {
    const {
        strokeColor = '#000',
        fillColor = '#fff',
        strokeWidth = 2,
        fill = false,
        stroke = true,
        opacity = 1,
        radius = 0
    } = options;

    ctx.save();
    ctx.globalAlpha = opacity;

    ctx.beginPath();
    if (radius > 0) {
        ctx.roundRect(x, y, width, height, radius);
    } else {
        ctx.rect(x, y, width, height);
    }

    if (fill) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }

    if (stroke) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
    }

    ctx.restore();
}

/**
 * Draw a circle/ellipse
 */
export function drawCircle(ctx, cx, cy, rx, ry = null, options = {}) {
    const {
        strokeColor = '#000',
        fillColor = '#fff',
        strokeWidth = 2,
        fill = false,
        stroke = true,
        opacity = 1
    } = options;

    const radiusY = ry ?? rx;

    ctx.save();
    ctx.globalAlpha = opacity;

    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, radiusY, 0, 0, Math.PI * 2);

    if (fill) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }

    if (stroke) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
    }

    ctx.restore();
}

/**
 * Draw a path (freehand)
 */
export function drawPath(ctx, points, options = {}) {
    if (!points || points.length < 2) return;

    const { color = '#000', width = 2, style = 'solid', opacity = 1 } = options;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (style === 'dashed') {
        ctx.setLineDash([width * 2, width]);
    } else if (style === 'dotted') {
        ctx.setLineDash([width, width]);
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    // Use quadratic curves for smoother paths
    for (let i = 1; i < points.length - 1; i++) {
        const midX = (points[i].x + points[i + 1].x) / 2;
        const midY = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
    }

    // Last point
    const last = points[points.length - 1];
    ctx.lineTo(last.x, last.y);

    ctx.stroke();
    ctx.restore();
}

/**
 * Draw a bezier curve
 */
export function drawBezier(ctx, points, options = {}) {
    if (!points || points.length < 4) return;

    const { color = '#000', width = 2, opacity = 1 } = options;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.bezierCurveTo(
        points[1].x, points[1].y,
        points[2].x, points[2].y,
        points[3].x, points[3].y
    );
    ctx.stroke();
    ctx.restore();
}

/**
 * Flood fill algorithm
 */
export function floodFill(ctx, startX, startY, fillColor, tolerance = 0) {
    const canvas = ctx.canvas;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const startIdx = (startY * canvas.width + startX) * 4;
    const targetColor = {
        r: data[startIdx],
        g: data[startIdx + 1],
        b: data[startIdx + 2],
        a: data[startIdx + 3]
    };

    // Parse fill color
    const fill = hexToRgb(fillColor);
    if (!fill) return;

    // Don't fill if same color
    if (
        Math.abs(targetColor.r - fill.r) <= tolerance &&
        Math.abs(targetColor.g - fill.g) <= tolerance &&
        Math.abs(targetColor.b - fill.b) <= tolerance
    ) {
        return;
    }

    const stack = [[startX, startY]];
    const visited = new Set();

    while (stack.length > 0) {
        const [x, y] = stack.pop();
        const key = `${x},${y}`;

        if (visited.has(key)) continue;
        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;

        const idx = (y * canvas.width + x) * 4;
        const currentColor = {
            r: data[idx],
            g: data[idx + 1],
            b: data[idx + 2],
            a: data[idx + 3]
        };

        // Check if this pixel matches target color
        if (
            Math.abs(currentColor.r - targetColor.r) > tolerance ||
            Math.abs(currentColor.g - targetColor.g) > tolerance ||
            Math.abs(currentColor.b - targetColor.b) > tolerance ||
            Math.abs(currentColor.a - targetColor.a) > tolerance
        ) {
            continue;
        }

        visited.add(key);

        // Fill pixel
        data[idx] = fill.r;
        data[idx + 1] = fill.g;
        data[idx + 2] = fill.b;
        data[idx + 3] = 255;

        // Add neighbors
        stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }

    ctx.putImageData(imageData, 0, 0);
}

/**
 * Erase at position
 */
export function erase(ctx, x, y, size) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

/**
 * Get color at position
 */
export function getColorAt(ctx, x, y) {
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    return rgbToHex(pixel[0], pixel[1], pixel[2]);
}

/**
 * Clear canvas
 */
export function clearCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// ============== Helper functions ==============

/**
 * Convert hex to RGB
 */
export function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

/**
 * Get distance between two points
 */
export function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Snap position to grid
 */
export function snapToGrid(x, y, gridSize = 1) {
    return {
        x: Math.round(x / gridSize) * gridSize,
        y: Math.round(y / gridSize) * gridSize
    };
}

/**
 * Get canvas coordinates from mouse event
 */
export function getCanvasCoords(e, canvas, zoom) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor((e.clientX - rect.left) / zoom),
        y: Math.floor((e.clientY - rect.top) / zoom)
    };
}

/**
 * Draw grid overlay
 */
export function drawGrid(ctx, width, height, gridSize = 1, color = 'rgba(0,0,0,0.1)') {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;

    // Vertical lines
    for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    ctx.restore();
}
