import React, { createContext, useContext, useRef } from 'react';
import { useEngine } from '../../hooks/useEngine';

const DrawingContext = createContext(null);

export function DrawingProvider({ children }) {
    // We need a ref for the canvas that will be mounted in DrawingCanvas
    // This context will provide that ref to the canvas component
    const canvasRef = useRef(null);
    const { engine, state, actions } = useEngine(canvasRef);

    const value = {
        engine,
        state,
        actions,
        canvasRef
    };

    return (
        <DrawingContext.Provider value={value}>
            {children}
        </DrawingContext.Provider>
    );
}

export function useDrawing() {
    const context = useContext(DrawingContext);
    if (!context) {
        throw new Error('useDrawing must be used within a DrawingProvider');
    }
    return context;
}
