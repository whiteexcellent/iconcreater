import { BaseTool } from './BaseTool';
import PathElement from '../elements/PathElement';

export default class PencilTool extends BaseTool {
    constructor(engine) {
        super(engine);
        this.isDrawing = false;
        this.points = [];
    }

    onMouseDown(e) {
        this.isDrawing = true;
        this.points = [{ x: e.canvasX, y: e.canvasY }];
    }

    onMouseMove(e) {
        if (!this.isDrawing) return;
        this.points.push({ x: e.canvasX, y: e.canvasY });

        // Immediate preview: Engine can support a "preview" layer or temp element
        // For now we can emit an event or update a temp element in execution
        this.engine.emit('preview', {
            type: 'path',
            points: this.points,
            style: {
                stroke: this.engine.strokeColor,
                strokeWidth: this.engine.strokeWidth
            }
        });
    }

    onMouseUp(e) {
        if (!this.isDrawing) return;
        this.isDrawing = false;

        if (this.points.length > 1) {
            const element = new PathElement({
                points: this.points,
                stroke: this.engine.strokeColor,
                strokeWidth: this.engine.strokeWidth,
                opacity: this.engine.opacity
            });
            this.engine.addElement(element);
        }

        this.points = [];
        this.engine.emit('preview', null); // Clear preview
    }
}
