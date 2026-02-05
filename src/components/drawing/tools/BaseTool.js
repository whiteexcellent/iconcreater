/**
 * Base Tool Class
 */
export class BaseTool {
    constructor(engine) {
        this.engine = engine;
    }

    onMouseDown(e) { }
    onMouseMove(e) { }
    onMouseUp(e) { }
    onKeyDown(e) { }
    onKeyUp(e) { }
}

/**
 * Tool Manager
 */
export class ToolManager {
    constructor(engine) {
        this.engine = engine;
        this.activeTool = null;
        this.tools = {};
    }

    register(name, toolInstance) {
        this.tools[name] = toolInstance;
    }

    setTool(name) {
        if (this.tools[name]) {
            this.activeTool = this.tools[name];
            this.engine.emit('toolChange', { tool: name });
        }
    }

    // Forward events to active tool
    handleEvent(eventName, e) {
        if (this.activeTool && typeof this.activeTool[eventName] === 'function') {
            this.activeTool[eventName](e);
        }
    }
}
