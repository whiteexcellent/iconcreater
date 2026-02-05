import Element from '../core/Element';
import { pointsToPath } from '../../../utils/svgExporter'; // Re-use existing utility

/**
 * Path Element (Freehand/Brush)
 */
export default class PathElement extends Element {
    constructor(props = {}) {
        super(props);
        this.type = 'path';
        this.points = props.points || [];
        this.d = props.d || '';
        if (this.points.length > 0 && !this.d) {
            this.d = pointsToPath(this.points); // Convert points to SVG path data
        }
    }

    render(ctx) {
        if (!this.d) return;

        ctx.beginPath();
        const p = new Path2D(this.d);

        if (this.fill && this.fill !== 'none') {
            ctx.fillStyle = this.fill;
            ctx.fill(p);
        }

        if (this.stroke && this.stroke !== 'none') {
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = this.strokeWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke(p);
        }
    }

    // Rough bounds calculation
    getBounds() {
        if (this.points.length === 0) return super.getBounds();

        let minX = Infinity, minY = Infinity;
        let maxX = -Infinity, maxY = -Infinity;

        this.points.forEach(p => {
            minX = Math.min(minX, p.x);
            minY = Math.min(minY, p.y);
            maxX = Math.max(maxX, p.x);
            maxY = Math.max(maxY, p.y);
        });

        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }

    toJSON() {
        return {
            ...super.toJSON(),
            points: this.points,
            d: this.d
        };
    }
}
