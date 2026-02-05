/**
 * History Manager for Undo/Redo
 */
export default class History {
    constructor(limit = 50) {
        this.limit = limit;
        this.undoStack = [];
        this.redoStack = [];
    }

    /**
     * Push a new state to history
     * @param {Object} state - Snapshot of engine state (elements)
     */
    push(state) {
        // Deep copy state to ensure immutability
        const snapshot = JSON.parse(JSON.stringify(state));

        this.undoStack.push(snapshot);

        // Limit stack size
        if (this.undoStack.length > this.limit) {
            this.undoStack.shift();
        }

        // Clear redo stack on new action
        this.redoStack = [];
    }

    /**
     * Undo last action
     * @returns {Object|null} Previous state or null
     */
    undo(currentState) {
        if (this.undoStack.length === 0) return null;

        const currentSnapshot = JSON.parse(JSON.stringify(currentState));
        this.redoStack.push(currentSnapshot);

        return this.undoStack.pop();
    }

    /**
     * Redo last undone action
     * @returns {Object|null} Next state or null
     */
    redo(currentState) {
        if (this.redoStack.length === 0) return null;

        const currentSnapshot = JSON.parse(JSON.stringify(currentState));
        this.undoStack.push(currentSnapshot);

        return this.redoStack.pop();
    }

    /**
     * Check if undo is available
     */
    get canUndo() {
        return this.undoStack.length > 0;
    }

    /**
     * Check if redo is available
     */
    get canRedo() {
        return this.redoStack.length > 0;
    }

    /**
     * Clear history
     */
    clear() {
        this.undoStack = [];
        this.redoStack = [];
    }
}
