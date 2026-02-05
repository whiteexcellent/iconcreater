/**
 * Canvas Renderer
 * Handles rendering elements to a 2D canvas context
 */
export default class Renderer {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.options = options;

        // Optimization: Offscreen canvas for caching if needed
    }

    /**
     * Clear and render the scene
     * @param {Engine} engine - The engine instance
     * @param {Object} renderOptions - { zoom, panX, panY, showGrid }
     */
    render(engine, renderOptions = {}) {
        const ctx = this.ctx;
        const { width, height } = this.canvas;
        const { zoom = 1, panX = 0, panY = 0, showGrid = true } = renderOptions;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Save context for transform
        ctx.save();

        // Apply zoom and pan
        ctx.translate(panX, panY);
        ctx.scale(zoom, zoom);

        // Draw background (checkered) usually drawn on a separate canvas or div via CSS to avoid redrawing
        // But if we want it in the export, we might need it here. 
        // For editor renderer, we usually assume background is handled by CSS or separate layer.

        // Draw Grid if enabled
        if (showGrid) {
            this.drawGrid(ctx, engine.width, engine.height, 1, zoom);
        }

        // Render Elements
        const elements = engine.getElements();

        elements.forEach(element => {
            if (!element.visible) return;

            // Check layer visibility
            const layer = engine.layers.find(l => l.id === element.layerId);
            if (layer && !layer.visible) return;

            // Render element
            ctx.save();
            ctx.globalAlpha = (element.opacity ?? 1) * (layer ? (layer.opacity ?? 1) : 1);

            if (typeof element.render === 'function') {
                element.render(ctx);
            } else {
                this.renderGeneric(ctx, element);
            }

            ctx.restore();
        });

        // Render Preview Element
        if (engine.previewElement) {
            ctx.save();
            // Preview style override or use element style
            const style = engine.previewElement.style || {};
            const previewEl = { ...engine.previewElement, ...style }; // Flatten style

            ctx.globalAlpha = (previewEl.opacity ?? 1) * 0.7; // Ghost effect
            this.renderGeneric(ctx, previewEl);
            ctx.restore();
        }

        // Draw Selection Outline
        const selectedIds = engine.selection.ids;
        if (selectedIds.length > 0) {
            this.drawSelection(ctx, engine, selectedIds);
        }

        ctx.restore();
    }

    /**
     * Fallback renderer for generic element data
     */
    renderGeneric(ctx, element) {
        ctx.beginPath();
        const { x, y, width, height, stroke, strokeWidth, fill, points, d } = element;

        if (element.type === 'rect') {
            if (element.radius) {
                ctx.roundRect(x, y, width, height, element.radius);
            } else {
                ctx.rect(x, y, width, height);
            }
        } else if (element.type === 'circle') {
            // Supports x,y,width,height OR cx,cy,rx,ry
            if (element.cx !== undefined) {
                ctx.ellipse(element.cx, element.cy, element.rx, element.ry, 0, 0, Math.PI * 2);
            } else {
                ctx.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
            }
        } else if (element.type === 'line') {
            // Supports x,y + x2,y2 OR x1,y1,x2,y2
            const X1 = element.x1 !== undefined ? element.x1 : x;
            const Y1 = element.y1 !== undefined ? element.y1 : y;
            const X2 = element.x2 !== undefined ? element.x2 : (element.end ? element.end.x : (x + width)); // Fallback
            const Y2 = element.y2 !== undefined ? element.y2 : (element.end ? element.end.y : (y + height));

            // If preview provides start/end points directly
            if (element.start && element.end) {
                ctx.moveTo(element.start.x, element.start.y);
                ctx.lineTo(element.end.x, element.end.y);
            } else {
                ctx.moveTo(X1, Y1);
                ctx.lineTo(X2, Y2);
            }
        } else if (element.type === 'path') {
            if (d) {
                const p = new Path2D(d);
                if (fill && fill !== 'none') {
                    ctx.fillStyle = fill;
                    ctx.fill(p);
                }
                if (stroke && stroke !== 'none') {
                    ctx.strokeStyle = stroke;
                    ctx.lineWidth = strokeWidth;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.stroke(p);
                }
                return; // Path2D handles drawing
            } else if (points && points.length > 0) {
                // Construct path from points
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    // Simple smoothing could go here, for now line segments
                    ctx.lineTo(points[i].x, points[i].y);
                }
                // If filling a path, close it? Usually pencil is not closed unless requested.
            }
        }

        if (fill && fill !== 'none' && element.type !== 'line' && element.type !== 'path') {
            ctx.fillStyle = fill;
            ctx.fill();
        }

        if (stroke && stroke !== 'none' && element.type !== 'path') {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            if (element.type === 'line' || element.type === 'path') {
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
            }
            ctx.stroke();
        }
    }

    /**
     * Draw validation grid
     */
    drawGrid(ctx, width, height, gridSize, zoom) {
        // Only draw generic grid if zoomed in enough
        if (zoom < 4) return;

        ctx.save();
        ctx.strokeStyle = 'rgba(0,0,0,0.05)';
        ctx.lineWidth = 0.5 / zoom; // Keep 1px logical width

        ctx.beginPath();
        for (let x = 0; x <= width; x += gridSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        for (let y = 0; y <= height; y += gridSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }
        ctx.stroke();
        ctx.restore();
    }

    /**
     * Draw selection bounds
     */
    drawSelection(ctx, engine, selectedIds) {
        ctx.save();
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 1 / engine.zoom; // Constant width regardless of zoom usually better
        ctx.setLineDash([4, 4]);

        selectedIds.forEach(id => {
            const el = engine.getElement(id);
            if (el) {
                // Get bounds (simple)
                ctx.strokeRect(el.x - 2, el.y - 2, el.width + 4, el.height + 4);
            }
        });
        ctx.restore();
    }
}
