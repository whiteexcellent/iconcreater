import { createContext, useContext, useReducer, useCallback } from 'react';

// ============================================================================
// DRAWING STORE - State management for drawing canvas
// ============================================================================

const DrawingContext = createContext(null);

// Tool types
export const TOOLS = {
    PENCIL: 'pencil',
    BRUSH: 'brush',
    ERASER: 'eraser',
    LINE: 'line',
    RECT: 'rect',
    CIRCLE: 'circle',
    FILL: 'fill',
    EYEDROPPER: 'eyedropper',
    SELECT: 'select',
    BEZIER: 'bezier'
};

// Initial state
const initialState = {
    // Tool settings
    tool: TOOLS.PENCIL,
    strokeColor: '#000000',
    fillColor: '#ffffff',
    strokeWidth: 2,
    strokeStyle: 'solid', // solid, dashed, dotted
    fillEnabled: false,
    opacity: 1,

    // Canvas settings
    zoom: 4,
    gridVisible: true,
    snapToGrid: true,
    canvasWidth: 64,
    canvasHeight: 64,

    // Layers
    layers: [
        { id: 'layer-1', name: 'Layer 1', visible: true, locked: false, opacity: 1, elements: [] }
    ],
    activeLayerId: 'layer-1',

    // History (undo/redo)
    history: [],
    historyIndex: -1,
    maxHistory: 50,

    // Current drawing state
    isDrawing: false,
    currentPath: null,
    selectedElements: [],

    // UI state
    colorPickerOpen: false,
    layerPanelOpen: true,
};

// Action types
const ActionTypes = {
    SET_TOOL: 'SET_TOOL',
    SET_STROKE_COLOR: 'SET_STROKE_COLOR',
    SET_FILL_COLOR: 'SET_FILL_COLOR',
    SET_STROKE_WIDTH: 'SET_STROKE_WIDTH',
    SET_STROKE_STYLE: 'SET_STROKE_STYLE',
    SET_FILL_ENABLED: 'SET_FILL_ENABLED',
    SET_OPACITY: 'SET_OPACITY',
    SET_ZOOM: 'SET_ZOOM',
    TOGGLE_GRID: 'TOGGLE_GRID',
    TOGGLE_SNAP: 'TOGGLE_SNAP',

    // Layer actions
    ADD_LAYER: 'ADD_LAYER',
    DELETE_LAYER: 'DELETE_LAYER',
    SET_ACTIVE_LAYER: 'SET_ACTIVE_LAYER',
    RENAME_LAYER: 'RENAME_LAYER',
    TOGGLE_LAYER_VISIBILITY: 'TOGGLE_LAYER_VISIBILITY',
    TOGGLE_LAYER_LOCK: 'TOGGLE_LAYER_LOCK',
    SET_LAYER_OPACITY: 'SET_LAYER_OPACITY',
    REORDER_LAYERS: 'REORDER_LAYERS',
    DUPLICATE_LAYER: 'DUPLICATE_LAYER',

    // Drawing actions
    START_DRAWING: 'START_DRAWING',
    UPDATE_DRAWING: 'UPDATE_DRAWING',
    END_DRAWING: 'END_DRAWING',
    ADD_ELEMENT: 'ADD_ELEMENT',
    UPDATE_ELEMENT: 'UPDATE_ELEMENT',
    DELETE_ELEMENT: 'DELETE_ELEMENT',
    CLEAR_LAYER: 'CLEAR_LAYER',

    // Selection
    SELECT_ELEMENTS: 'SELECT_ELEMENTS',
    CLEAR_SELECTION: 'CLEAR_SELECTION',

    // History
    UNDO: 'UNDO',
    REDO: 'REDO',
    PUSH_HISTORY: 'PUSH_HISTORY',

    // Load/Reset
    LOAD_STATE: 'LOAD_STATE',
    RESET: 'RESET',

    // UI
    TOGGLE_COLOR_PICKER: 'TOGGLE_COLOR_PICKER',
    TOGGLE_LAYER_PANEL: 'TOGGLE_LAYER_PANEL',
};

// Generate unique ID
function generateId() {
    return `el_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Reducer
function drawingReducer(state, action) {
    switch (action.type) {
        // Tool settings
        case ActionTypes.SET_TOOL:
            return { ...state, tool: action.payload };
        case ActionTypes.SET_STROKE_COLOR:
            return { ...state, strokeColor: action.payload };
        case ActionTypes.SET_FILL_COLOR:
            return { ...state, fillColor: action.payload };
        case ActionTypes.SET_STROKE_WIDTH:
            return { ...state, strokeWidth: action.payload };
        case ActionTypes.SET_STROKE_STYLE:
            return { ...state, strokeStyle: action.payload };
        case ActionTypes.SET_FILL_ENABLED:
            return { ...state, fillEnabled: action.payload };
        case ActionTypes.SET_OPACITY:
            return { ...state, opacity: action.payload };

        // Canvas settings
        case ActionTypes.SET_ZOOM:
            return { ...state, zoom: Math.max(1, Math.min(8, action.payload)) };
        case ActionTypes.TOGGLE_GRID:
            return { ...state, gridVisible: !state.gridVisible };
        case ActionTypes.TOGGLE_SNAP:
            return { ...state, snapToGrid: !state.snapToGrid };

        // Layer actions
        case ActionTypes.ADD_LAYER: {
            const newLayer = {
                id: `layer-${Date.now()}`,
                name: `Layer ${state.layers.length + 1}`,
                visible: true,
                locked: false,
                opacity: 1,
                elements: []
            };
            return {
                ...state,
                layers: [...state.layers, newLayer],
                activeLayerId: newLayer.id
            };
        }

        case ActionTypes.DELETE_LAYER: {
            if (state.layers.length <= 1) return state;
            const layers = state.layers.filter(l => l.id !== action.payload);
            const activeLayerId = state.activeLayerId === action.payload
                ? layers[layers.length - 1].id
                : state.activeLayerId;
            return { ...state, layers, activeLayerId };
        }

        case ActionTypes.SET_ACTIVE_LAYER:
            return { ...state, activeLayerId: action.payload };

        case ActionTypes.RENAME_LAYER:
            return {
                ...state,
                layers: state.layers.map(l =>
                    l.id === action.payload.id ? { ...l, name: action.payload.name } : l
                )
            };

        case ActionTypes.TOGGLE_LAYER_VISIBILITY:
            return {
                ...state,
                layers: state.layers.map(l =>
                    l.id === action.payload ? { ...l, visible: !l.visible } : l
                )
            };

        case ActionTypes.TOGGLE_LAYER_LOCK:
            return {
                ...state,
                layers: state.layers.map(l =>
                    l.id === action.payload ? { ...l, locked: !l.locked } : l
                )
            };

        case ActionTypes.SET_LAYER_OPACITY:
            return {
                ...state,
                layers: state.layers.map(l =>
                    l.id === action.payload.id ? { ...l, opacity: action.payload.opacity } : l
                )
            };

        case ActionTypes.REORDER_LAYERS:
            return { ...state, layers: action.payload };

        case ActionTypes.DUPLICATE_LAYER: {
            const layerToDuplicate = state.layers.find(l => l.id === action.payload);
            if (!layerToDuplicate) return state;
            const newLayer = {
                ...layerToDuplicate,
                id: `layer-${Date.now()}`,
                name: `${layerToDuplicate.name} copy`,
                elements: layerToDuplicate.elements.map(el => ({ ...el, id: generateId() }))
            };
            const index = state.layers.findIndex(l => l.id === action.payload);
            const layers = [...state.layers];
            layers.splice(index + 1, 0, newLayer);
            return { ...state, layers, activeLayerId: newLayer.id };
        }

        // Drawing actions
        case ActionTypes.START_DRAWING:
            return { ...state, isDrawing: true, currentPath: action.payload };

        case ActionTypes.UPDATE_DRAWING:
            return { ...state, currentPath: action.payload };

        case ActionTypes.END_DRAWING:
            return { ...state, isDrawing: false, currentPath: null };

        case ActionTypes.ADD_ELEMENT: {
            const element = { ...action.payload, id: generateId() };
            return {
                ...state,
                layers: state.layers.map(l =>
                    l.id === state.activeLayerId
                        ? { ...l, elements: [...l.elements, element] }
                        : l
                )
            };
        }

        case ActionTypes.UPDATE_ELEMENT:
            return {
                ...state,
                layers: state.layers.map(l => ({
                    ...l,
                    elements: l.elements.map(el =>
                        el.id === action.payload.id ? { ...el, ...action.payload.updates } : el
                    )
                }))
            };

        case ActionTypes.DELETE_ELEMENT:
            return {
                ...state,
                layers: state.layers.map(l => ({
                    ...l,
                    elements: l.elements.filter(el => el.id !== action.payload)
                }))
            };

        case ActionTypes.CLEAR_LAYER:
            return {
                ...state,
                layers: state.layers.map(l =>
                    l.id === action.payload ? { ...l, elements: [] } : l
                )
            };

        // Selection
        case ActionTypes.SELECT_ELEMENTS:
            return { ...state, selectedElements: action.payload };

        case ActionTypes.CLEAR_SELECTION:
            return { ...state, selectedElements: [] };

        // History
        case ActionTypes.PUSH_HISTORY: {
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push(action.payload);
            if (newHistory.length > state.maxHistory) {
                newHistory.shift();
            }
            return {
                ...state,
                history: newHistory,
                historyIndex: newHistory.length - 1
            };
        }

        case ActionTypes.UNDO: {
            if (state.historyIndex <= 0) return state;
            const newIndex = state.historyIndex - 1;
            return {
                ...state,
                historyIndex: newIndex,
                layers: state.history[newIndex].layers
            };
        }

        case ActionTypes.REDO: {
            if (state.historyIndex >= state.history.length - 1) return state;
            const newIndex = state.historyIndex + 1;
            return {
                ...state,
                historyIndex: newIndex,
                layers: state.history[newIndex].layers
            };
        }

        // Load/Reset
        case ActionTypes.LOAD_STATE:
            return { ...initialState, ...action.payload };

        case ActionTypes.RESET:
            return { ...initialState };

        // UI
        case ActionTypes.TOGGLE_COLOR_PICKER:
            return { ...state, colorPickerOpen: !state.colorPickerOpen };

        case ActionTypes.TOGGLE_LAYER_PANEL:
            return { ...state, layerPanelOpen: !state.layerPanelOpen };

        default:
            return state;
    }
}

// Provider component
export function DrawingProvider({ children }) {
    const [state, dispatch] = useReducer(drawingReducer, initialState);

    // Memoized action creators
    const actions = {
        setTool: useCallback((tool) => dispatch({ type: ActionTypes.SET_TOOL, payload: tool }), []),
        setStrokeColor: useCallback((color) => dispatch({ type: ActionTypes.SET_STROKE_COLOR, payload: color }), []),
        setFillColor: useCallback((color) => dispatch({ type: ActionTypes.SET_FILL_COLOR, payload: color }), []),
        setStrokeWidth: useCallback((width) => dispatch({ type: ActionTypes.SET_STROKE_WIDTH, payload: width }), []),
        setStrokeStyle: useCallback((style) => dispatch({ type: ActionTypes.SET_STROKE_STYLE, payload: style }), []),
        setFillEnabled: useCallback((enabled) => dispatch({ type: ActionTypes.SET_FILL_ENABLED, payload: enabled }), []),
        setOpacity: useCallback((opacity) => dispatch({ type: ActionTypes.SET_OPACITY, payload: opacity }), []),
        setZoom: useCallback((zoom) => dispatch({ type: ActionTypes.SET_ZOOM, payload: zoom }), []),
        toggleGrid: useCallback(() => dispatch({ type: ActionTypes.TOGGLE_GRID }), []),
        toggleSnap: useCallback(() => dispatch({ type: ActionTypes.TOGGLE_SNAP }), []),

        addLayer: useCallback(() => dispatch({ type: ActionTypes.ADD_LAYER }), []),
        deleteLayer: useCallback((id) => dispatch({ type: ActionTypes.DELETE_LAYER, payload: id }), []),
        setActiveLayer: useCallback((id) => dispatch({ type: ActionTypes.SET_ACTIVE_LAYER, payload: id }), []),
        renameLayer: useCallback((id, name) => dispatch({ type: ActionTypes.RENAME_LAYER, payload: { id, name } }), []),
        toggleLayerVisibility: useCallback((id) => dispatch({ type: ActionTypes.TOGGLE_LAYER_VISIBILITY, payload: id }), []),
        toggleLayerLock: useCallback((id) => dispatch({ type: ActionTypes.TOGGLE_LAYER_LOCK, payload: id }), []),
        setLayerOpacity: useCallback((id, opacity) => dispatch({ type: ActionTypes.SET_LAYER_OPACITY, payload: { id, opacity } }), []),
        reorderLayers: useCallback((layers) => dispatch({ type: ActionTypes.REORDER_LAYERS, payload: layers }), []),
        duplicateLayer: useCallback((id) => dispatch({ type: ActionTypes.DUPLICATE_LAYER, payload: id }), []),

        startDrawing: useCallback((path) => dispatch({ type: ActionTypes.START_DRAWING, payload: path }), []),
        updateDrawing: useCallback((path) => dispatch({ type: ActionTypes.UPDATE_DRAWING, payload: path }), []),
        endDrawing: useCallback(() => dispatch({ type: ActionTypes.END_DRAWING }), []),
        addElement: useCallback((element) => dispatch({ type: ActionTypes.ADD_ELEMENT, payload: element }), []),
        updateElement: useCallback((id, updates) => dispatch({ type: ActionTypes.UPDATE_ELEMENT, payload: { id, updates } }), []),
        deleteElement: useCallback((id) => dispatch({ type: ActionTypes.DELETE_ELEMENT, payload: id }), []),
        clearLayer: useCallback((id) => dispatch({ type: ActionTypes.CLEAR_LAYER, payload: id }), []),

        selectElements: useCallback((ids) => dispatch({ type: ActionTypes.SELECT_ELEMENTS, payload: ids }), []),
        clearSelection: useCallback(() => dispatch({ type: ActionTypes.CLEAR_SELECTION }), []),

        pushHistory: useCallback((snapshot) => dispatch({ type: ActionTypes.PUSH_HISTORY, payload: snapshot }), []),
        undo: useCallback(() => dispatch({ type: ActionTypes.UNDO }), []),
        redo: useCallback(() => dispatch({ type: ActionTypes.REDO }), []),

        loadState: useCallback((state) => dispatch({ type: ActionTypes.LOAD_STATE, payload: state }), []),
        reset: useCallback(() => dispatch({ type: ActionTypes.RESET }), []),

        toggleColorPicker: useCallback(() => dispatch({ type: ActionTypes.TOGGLE_COLOR_PICKER }), []),
        toggleLayerPanel: useCallback(() => dispatch({ type: ActionTypes.TOGGLE_LAYER_PANEL }), []),
    };

    return (
        <DrawingContext.Provider value={{ state, actions, dispatch }}>
            {children}
        </DrawingContext.Provider>
    );
}

// Hook to use drawing store
export function useDrawing() {
    const context = useContext(DrawingContext);
    if (!context) {
        throw new Error('useDrawing must be used within a DrawingProvider');
    }
    return context;
}

// Selector hooks
export function useActiveLayer() {
    const { state } = useDrawing();
    return state.layers.find(l => l.id === state.activeLayerId);
}

export function useCanUndo() {
    const { state } = useDrawing();
    return state.historyIndex > 0;
}

export function useCanRedo() {
    const { state } = useDrawing();
    return state.historyIndex < state.history.length - 1;
}
