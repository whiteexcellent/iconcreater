/**
 * Base Element Class
 * Represents a single drawable object on the canvas
 */
export default class Element {
    constructor(props = {}) {
        this.id = props.id || this.generateId();
        this.type = 'base';
        this.visible = props.visible !== false;
        this.locked = props.locked || false;
        this.opacity = props.opacity ?? 1;

        // Transform
        this.x = props.x || 0;
        this.y = props.y || 0;
        this.width = props.width || 0;
        this.height = props.height || 0;
        this.rotation = props.rotation || 0;

        // Style
        this.stroke = props.stroke || '#000000';
        this.strokeWidth = props.strokeWidth ?? 2;
        this.fill = props.fill || 'none';

        // Metadata
        this.createdAt = props.createdAt || Date.now();
        this.updatedAt = props.updatedAt || Date.now();
    }

    generateId() {
        return 'el_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Render the element to the given context
     * @param {CanvasRenderingContext2D} ctx 
     */
    render(ctx) {
        // Base implementation does nothing
        // Override in subclasses
    }

    /**
     * Check if point is inside element
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    hitTest(x, y) {
        return false;
    }

    /**
     * Get bounding box
     * @returns {Object} {x, y, width, height}
     */
    getBounds() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    }

    /**
     * Move element
     */
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        this.updatedAt = Date.now();
    }

    /**
     * Resize element
     */
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.updatedAt = Date.now();
    }

    /**
     * Update style properties
     */
    setStyle(style = {}) {
        Object.assign(this, style);
        this.updatedAt = Date.now();
    }

    /**
     * Clone element
     */
    clone() {
        return new Element({
            ...this.toJSON(),
            id: undefined, // Generate new ID
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
    }

    /**
     * Serialize to JSON
     */
    toJSON() {
        return {
            id: this.id,
            type: this.type,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            rotation: this.rotation,
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            fill: this.fill,
            opacity: this.opacity,
            visible: this.visible,
            locked: this.locked,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    /**
     * Create from JSON
     */
    static fromJSON(data) {
        return new Element(data);
    }
}
