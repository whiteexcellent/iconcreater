import Element from '../core/Element';

/**
 * Rectangle Element
 */
export class RectElement extends Element {
    constructor(props = {}) {
        super(props);
        this.type = 'rect';
        this.radius = props.radius || 0;
    }

    render(ctx) {
        ctx.beginPath();
        if (this.radius > 0) {
            ctx.roundRect(this.x, this.y, this.width, this.height, this.radius);
        } else {
            ctx.rect(this.x, this.y, this.width, this.height);
        }

        if (this.fill && this.fill !== 'none') {
            ctx.fillStyle = this.fill;
            ctx.fill();
        }

        if (this.stroke && this.stroke !== 'none') {
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = this.strokeWidth;
            ctx.stroke();
        }
    }

    toJSON() {
        return { ...super.toJSON(), radius: this.radius };
    }
}

/**
 * Circle/Ellipse Element
 */
export class CircleElement extends Element {
    constructor(props = {}) {
        super(props);
        this.type = 'circle';
    }

    render(ctx) {
        ctx.beginPath();
        const rx = this.width / 2;
        const ry = this.height / 2;
        const cx = this.x + rx;
        const cy = this.y + ry;

        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);

        if (this.fill && this.fill !== 'none') {
            ctx.fillStyle = this.fill;
            ctx.fill();
        }

        if (this.stroke && this.stroke !== 'none') {
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = this.strokeWidth;
            ctx.stroke();
        }
    }
}

/**
 * Line Element
 */
export class LineElement extends Element {
    constructor(props = {}) {
        super(props);
        this.type = 'line';
        this.x2 = props.x2 || 0;
        this.y2 = props.y2 || 0;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);

        if (this.stroke && this.stroke !== 'none') {
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = this.strokeWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
    }

    getBounds() {
        const minX = Math.min(this.x, this.x2);
        const minY = Math.min(this.y, this.y2);
        const width = Math.abs(this.x2 - this.x);
        const height = Math.abs(this.y2 - this.y);
        return { x: minX, y: minY, width, height };
    }

    toJSON() {
        return { ...super.toJSON(), x2: this.x2, y2: this.y2 };
    }
}
