/**
 * Selection Manager
 * Handles selected elements state
 */
export default class Selection {
    constructor() {
        this.selectedIds = new Set();
    }

    /**
     * Add element to selection
     */
    add(id) {
        this.selectedIds.add(id);
    }

    /**
     * Remove element from selection
     */
    remove(id) {
        this.selectedIds.delete(id);
    }

    /**
     * Set selection (replaces current)
     */
    set(ids) {
        this.selectedIds = new Set(Array.isArray(ids) ? ids : [ids]);
    }

    /**
     * Toggle element selection
     */
    toggle(id) {
        if (this.selectedIds.has(id)) {
            this.selectedIds.delete(id);
        } else {
            this.selectedIds.add(id);
        }
    }

    /**
     * Clear all selection
     */
    clear() {
        this.selectedIds.clear();
    }

    /**
     * Check if element is selected
     */
    has(id) {
        return this.selectedIds.has(id);
    }

    /**
     * Get all selected IDs
     */
    get ids() {
        return Array.from(this.selectedIds);
    }

    /**
     * Get selection count
     */
    get size() {
        return this.selectedIds.size;
    }

    /**
     * Check if selection is empty
     */
    get isEmpty() {
        return this.selectedIds.size === 0;
    }
}
