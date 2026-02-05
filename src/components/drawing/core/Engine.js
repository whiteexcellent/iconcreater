import History from './History';
import Selection from './Selection';
import { ToolManager, PencilTool, ShapeTool } from '../tools';

/**
 * Core Drawing Engine
 * Framework-agnostic orchestrator for the drawing application
 */
export default class Engine {
    constructor(options = {}) {
        this.elements = [];
        this.layers = [{ id: 'layer-1', name: 'Layer 1', visible: true, locked: false, opacity: 1 }];
        this.activeLayerId = 'layer-1';

        this.history = new History(options.historyLimit || 50);
        this.selection = new Selection();
        this.listeners = new Map();

        // Canvas dimensions
        this.width = options.width || 64;
        this.height = options.height || 64;

        // Tool System
        this.toolManager = new ToolManager(this);
        this.registerTools();

        // Appearance State
        this.strokeColor = '#000000';
        this.fillColor = '#ffffff';
        this.strokeWidth = 2;
        this.fillEnabled = false;
        this.opacity = 1;
        this.zoom = 1;
        this.gridVisible = true;
        this.snapToGrid = false;

        // Preview state (for active drawing)
        this.previewElement = null;
    }

    registerTools() {
        this.toolManager.register('pencil', new PencilTool(this));
        this.toolManager.register('line', new ShapeTool(this, 'line'));
        this.toolManager.register('rect', new ShapeTool(this, 'rect'));
        this.toolManager.register('circle', new ShapeTool(this, 'circle'));

        this.toolManager.setTool('pencil');
    }

    setTool(name) {
        this.toolManager.setTool(name);
        this.emit('change', { type: 'tool' });
    }

    setZoom(zoom) {
        this.zoom = zoom;
        this.emit('change', { type: 'zoom', value: zoom });
    }

    setGridVisible(visible) {
        this.gridVisible = visible;
        this.emit('change', { type: 'grid', value: visible });
    }

    setSnapToGrid(enabled) {
        this.snapToGrid = enabled;
        this.emit('change', { type: 'snap', value: enabled });
    }

    /**
     * Add event listener
     */
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(callback);

        // Internal listener for specific engine events
        if (event === 'preview') {
            // We hook into our own event system to update internal state
            // But usually 'on' is for external consumers.
        }

        return () => this.off(event, callback);
    }

    /**
     * Remove event listener
     */
    off(event, callback) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).delete(callback);
        }
    }

    /**
     * Emit event
     */
    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(cb => cb(data));
        }
    }

    /**
     * Add a new element
     */
    addElement(element) {
        // Ensure element is on active layer
        element.layerId = this.activeLayerId;

        this.elements.push(element);
        this.pushHistory();
        this.emit('change', { type: 'add', element });
    }

    /**
     * Remove an element
     */
    removeElement(id) {
        const index = this.elements.findIndex(el => el.id === id);
        if (index !== -1) {
            const removed = this.elements.splice(index, 1)[0];
            this.selection.remove(id);
            this.pushHistory();
            this.emit('change', { type: 'remove', element: removed });
        }
    }

    /**
     * Update an element
     */
    updateElement(id, updates) {
        const element = this.elements.find(el => el.id === id);
        if (element) {
            Object.assign(element, updates);
            element.updatedAt = Date.now();
            this.pushHistory();
            this.emit('change', { type: 'update', element });
        }
    }

    /**
     * Get element by ID
     */
    getElement(id) {
        return this.elements.find(el => el.id === id);
    }

    /**
     * Get all elements (sorted by layer order and z-index)
     */
    getElements() {
        return this.elements; // Assuming push order is render order for now
    }

    /**
     * Save state to history
     */
    /**
     * Helper to emit history state
     */
    _emitHistory() {
        // Construct linear timeline for UI
        const undoStack = this.history.undoStack;
        const redoStack = [...this.history.redoStack].reverse();
        const history = [...undoStack, this.elements, ...redoStack];

        this.emit('history', {
            canUndo: this.history.canUndo,
            canRedo: this.history.canRedo,
            history,
            historyIndex: undoStack.length
        });
    }

    /**
     * Save state to history
     */
    pushHistory() {
        this.history.push(this.elements);
        this._emitHistory();
    }

    /**
     * Undo action
     */
    undo() {
        const prevElements = this.history.undo(this.elements);
        if (prevElements) {
            this.elements = prevElements;
            this.selection.clear(); // Clear selection on undo to avoid ghost IDs
            this.emit('change', { type: 'undo' });
            this._emitHistory();
        }
    }

    /**
     * Redo action
     */
    redo() {
        const nextElements = this.history.redo(this.elements);
        if (nextElements) {
            this.elements = nextElements;
            this.selection.clear();
            this.emit('change', { type: 'redo' });
            this._emitHistory();
        }
    }

    /**
     * Set active layer
     */
    setActiveLayer(id) {
        if (this.layers.find(l => l.id === id)) {
            this.activeLayerId = id;
            this.emit('layerChange', { activeLayerId: id });
            this.emit('change', { type: 'layerActive' });
        }
    }

    addLayer() {
        const id = 'layer-' + Math.random().toString(36).substr(2, 9);
        const newLayer = { id, name: `Layer ${this.layers.length + 1}`, visible: true, locked: false, opacity: 1 };
        this.layers.push(newLayer);
        this.activeLayerId = id;
        this.pushHistory();
        this.emit('change', { type: 'layerAdd', layer: newLayer });
        return id;
    }

    deleteLayer(id) {
        if (this.layers.length <= 1) return; // Verify at least one layer remains

        const index = this.layers.findIndex(l => l.id === id);
        if (index > -1) {
            this.layers.splice(index, 1);

            // Remove elements on this layer
            this.elements = this.elements.filter(el => el.layerId !== id);

            // Update active layer if needed
            if (this.activeLayerId === id) {
                this.activeLayerId = this.layers[Math.max(0, index - 1)].id;
            }

            this.pushHistory();
            this.emit('change', { type: 'layerDelete' });
        }
    }

    toggleLayerVisibility(id) {
        const layer = this.layers.find(l => l.id === id);
        if (layer) {
            layer.visible = !layer.visible;
            this.emit('change', { type: 'layerUpdate', layer });
        }
    }

    toggleLayerLock(id) {
        const layer = this.layers.find(l => l.id === id);
        if (layer) {
            layer.locked = !layer.locked;
            this.emit('change', { type: 'layerUpdate', layer });
        }
    }

    updateLayer(id, updates) {
        const layer = this.layers.find(l => l.id === id);
        if (layer) {
            Object.assign(layer, updates);
            this.pushHistory();
            this.emit('change', { type: 'layerUpdate', layer });
        }
    }

    moveLayer(id, direction) {
        const index = this.layers.findIndex(l => l.id === id);
        if (index === -1) return;

        const newIndex = index + direction;
        if (newIndex >= 0 && newIndex < this.layers.length) {
            const temp = this.layers[index];
            this.layers[index] = this.layers[newIndex];
            this.layers[newIndex] = temp;
            this.pushHistory();
            this.emit('change', { type: 'layerOrder' });
        }
    }

    /**
     * Serialize whole engine state
     */
    toJSON() {
        return {
            width: this.width,
            height: this.height,
            elements: this.elements.map(el => el.toJSON()),
            layers: this.layers,
            activeLayerId: this.activeLayerId
        };
    }

    /**
     * Load state
     */
    load(data) {
        if (!data) return;

        this.width = data.width || 64;
        this.height = data.height || 64;
        this.layers = data.layers || [{ id: 'layer-1', name: 'Layer 1', visible: true }];
        this.activeLayerId = data.activeLayerId || 'layer-1';

        // We'll need a factory to recreate specific element types later
        // For now just plain objects or base elements
        this.elements = (data.elements || []).map(elData => {
            // restoration logic will go here
            return elData;
        });

        this.history.clear();
        this.emit('change', { type: 'load' });
    }
}
