import { BaseTool } from './BaseTool';
import { RectElement, CircleElement, LineElement } from '../elements/ShapeElements';

export default class ShapeTool extends BaseTool {
    constructor(engine, type) {
        super(engine);
        this.type = type; // 'rect', 'circle', 'line'
        this.startPoint = null;
        this.isDrawing = false;
    }

    onMouseDown(e) {
        this.isDrawing = true;
        this.startPoint = { x: e.canvasX, y: e.canvasY };
    }

    onMouseMove(e) {
        if (!this.isDrawing) return;

        // Emit preview
        this.engine.emit('preview', {
            type: this.type,
            start: this.startPoint,
            end: { x: e.canvasX, y: e.canvasY },
            style: {
                stroke: this.engine.strokeColor,
                strokeWidth: this.engine.strokeWidth,
                fill: this.engine.fillEnabled ? this.engine.fillColor : 'none',
                opacity: this.engine.opacity
            }
        });
    }

    onMouseUp(e) {
        if (!this.isDrawing) return;
        this.isDrawing = false;

        const start = this.startPoint;
        const end = { x: e.canvasX, y: e.canvasY };

        let element;
        const width = end.x - start.x;
        const height = end.y - start.y;

        // Only add if size is non-trivial
        if (Math.abs(width) < 1 && Math.abs(height) < 1) {
            this.engine.emit('preview', null);
            return;
        }

        const commonProps = {
            stroke: this.engine.strokeColor,
            strokeWidth: this.engine.strokeWidth,
            fill: this.engine.fillEnabled ? this.engine.fillColor : 'none',
            opacity: this.engine.opacity,
            x: Math.min(start.x, end.x),
            y: Math.min(start.y, end.y),
            width: Math.abs(width),
            height: Math.abs(height)
        };

        if (this.type === 'rect') {
            element = new RectElement(commonProps);
        } else if (this.type === 'circle') {
            element = new CircleElement(commonProps);
        } else if (this.type === 'line') {
            element = new LineElement({
                ...commonProps,
                x: start.x, y: start.y, // Revert rect normalization for line
                x2: end.x, y2: end.y
            });
        }

        if (element) {
            this.engine.addElement(element);
        }

        this.engine.emit('preview', null);
    }
}
