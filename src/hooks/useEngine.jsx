import { useEffect, useState, useRef } from 'react';
import Engine from '../components/drawing/core/Engine';

export const TOOLS = {
    PENCIL: 'pencil',
    BRUSH: 'brush', // To be implemented
    ERASER: 'eraser', // To be implemented
    LINE: 'line',
    RECT: 'rect',
    CIRCLE: 'circle',
    FILL: 'fill', // To be implemented
    EYEDROPPER: 'eyedropper' // To be implemented
};

export function useEngine(canvasRef) {
    // Persistent engine instance
    const engineRef = useRef(null);
    if (!engineRef.current) {
        engineRef.current = new Engine({ width: 64, height: 64 });
    }
    const engine = engineRef.current;

    // React state for UI sync
    const [tool, setTool] = useState('pencil');
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [fillColor, setFillColor] = useState('#ffffff');
    const [strokeWidth, setStrokeWidth] = useState(2);
    const [fillEnabled, setFillEnabled] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [historyState, setHistoryState] = useState({ canUndo: false, canRedo: false, history: [], historyIndex: -1 });
    const [layers, setLayers] = useState(engine.layers);
    const [zoom, setZoom] = useState(engine.zoom);
    const [gridVisible, setGridVisible] = useState(engine.gridVisible);
    const [snapToGrid, setSnapToGrid] = useState(engine.snapToGrid);

    // Force re-render on engine change
    const [version, setVersion] = useState(0);

    useEffect(() => {
        // Sync engine state
        const updateState = () => {
            setTool(engine.toolManager.activeTool ? Object.keys(engine.toolManager.tools).find(key => engine.toolManager.tools[key] === engine.toolManager.activeTool) : 'pencil');
            setStrokeColor(engine.strokeColor);
            setFillColor(engine.fillColor);
            setStrokeWidth(engine.strokeWidth);
            setFillEnabled(engine.fillEnabled);
            setOpacity(engine.opacity);
            setOpacity(engine.opacity);
            setLayers([...engine.layers]);
            setZoom(engine.zoom);
            setGridVisible(engine.gridVisible);
            setSnapToGrid(engine.snapToGrid);
            setVersion(v => v + 1);
        };

        const handleHistory = (state) => setHistoryState(state);
        const handleChange = () => setVersion(v => v + 1);
        const handleToolChange = ({ tool }) => setTool(tool);

        // Subscribe
        const unsubChange = engine.on('change', handleChange);
        const unsubHistory = engine.on('history', handleHistory);
        const unsubTool = engine.on('toolChange', handleToolChange);
        const unsubPreview = engine.on('preview', (preview) => {
            engine.previewElement = preview;
            setVersion(v => v + 1); // Trigger render for preview
        });

        // Initial sync
        updateState();

        return () => {
            unsubChange();
            unsubHistory();
            unsubTool();
            unsubPreview();
        };
    }, [engine]);

    // Actions wrapper
    const actions = {
        setTool: (t) => engine.setTool(t),
        setStrokeColor: (c) => { engine.strokeColor = c; setStrokeColor(c); },
        setFillColor: (c) => { engine.fillColor = c; setFillColor(c); },
        setStrokeWidth: (w) => { engine.strokeWidth = w; setStrokeWidth(w); },
        setFillEnabled: (e) => { engine.fillEnabled = e; setFillEnabled(e); },
        setOpacity: (o) => { engine.opacity = o; setOpacity(o); },
        undo: () => engine.undo(),
        redo: () => engine.redo(),
        addLayer: () => engine.addLayer(),
        deleteLayer: (id) => engine.deleteLayer(id),
        setActiveLayer: (id) => engine.setActiveLayer(id),
        toggleLayerVisibility: (id) => engine.toggleLayerVisibility(id),
        toggleLayerLock: (id) => engine.toggleLayerLock(id),
        updateLayer: (id, updates) => engine.updateLayer(id, updates),
        reorderLayers: (startIndex, endIndex) => {
            // Basic reorder support: dnd-kit gives indices
            // Engine has moveLayer(id, direction)
            // We need to map or implement full reorder in Engine. 
            // For now, let's implement simple move.
            const layer = engine.layers[startIndex];
            if (!layer) return;
            const diff = endIndex - startIndex;
            if (diff !== 0) engine.moveLayer(layer.id, diff);
        },
        setZoom: (z) => engine.setZoom(z),
        toggleGrid: () => engine.setGridVisible(!engine.gridVisible),
        toggleSnap: () => engine.setSnapToGrid(!engine.snapToGrid),

        // Input handling
        handleMouseDown: (e) => {
            const rect = canvasRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / engine.zoom;
            const y = (e.clientY - rect.top) / engine.zoom;
            engine.toolManager.handleEvent('onMouseDown', { canvasX: x, canvasY: y, originalEvent: e });
        },
        handleMouseMove: (e) => {
            const rect = canvasRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / engine.zoom;
            const y = (e.clientY - rect.top) / engine.zoom;
            engine.toolManager.handleEvent('onMouseMove', { canvasX: x, canvasY: y, originalEvent: e });
        },
        handleMouseUp: (e) => {
            const rect = canvasRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / engine.zoom;
            const y = (e.clientY - rect.top) / engine.zoom;
            engine.toolManager.handleEvent('onMouseUp', { canvasX: x, canvasY: y, originalEvent: e });
        }
    };

    return {
        engine,
        state: {
            tool, strokeColor, fillColor, strokeWidth, fillEnabled, opacity,
            historyState, layers, version,
            zoom, gridVisible, snapToGrid
        },
        actions
    };
}
