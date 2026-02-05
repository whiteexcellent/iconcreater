import React, { useEffect, useRef } from 'react';
import { useDrawing } from './DrawingContext';
import Renderer from './core/Renderer';

export default function DrawingCanvas() {
    const { canvasRef, engine, state, actions } = useDrawing();
    const rendererRef = useRef(null);
    const containerRef = useRef(null);

    // Initialize Renderer
    useEffect(() => {
        if (canvasRef.current && !rendererRef.current) {
            // Set canvas size to match container or engine config
            canvasRef.current.width = engine.width;
            canvasRef.current.height = engine.height;

            rendererRef.current = new Renderer(canvasRef.current);
            // Initial render
            rendererRef.current.render(engine, { zoom: state.zoom || 1 });
        }
    }, [canvasRef, engine]);

    // Handle updates (render loop based on state version)
    useEffect(() => {
        if (rendererRef.current) {
            rendererRef.current.render(engine, { zoom: state.zoom || 1 });
        }
    }, [state.version, state.zoom, engine]); // Re-render when version changes

    // Update canvas size if engine size changes (e.g. load new file)
    useEffect(() => {
        if (canvasRef.current && rendererRef.current) {
            canvasRef.current.width = engine.width;
            canvasRef.current.height = engine.height;
            rendererRef.current.render(engine, { zoom: state.zoom || 1 });
        }
    }, [engine.width, engine.height, state.zoom]);


    return (
        <div
            ref={containerRef}
            style={styles.container}
        >
            <div style={{
                position: 'relative',
                width: engine.width * (state.zoom || 1),
                height: engine.height * (state.zoom || 1),
                background: `
                    conic-gradient(#cdcdcd 0.25turn, transparent 0.25turn 0.5turn, #cdcdcd 0.5turn 0.75turn, transparent 0.75turn) top left / 16px 16px repeat,
                    #ffffff
                `, // Checkered pattern
                boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                cursor: 'crosshair'
            }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        imageRendering: 'pixelated'
                    }}
                    onMouseDown={actions.handleMouseDown}
                    onMouseMove={actions.handleMouseMove}
                    onMouseUp={actions.handleMouseUp}
                    onMouseLeave={actions.handleMouseUp}
                />
            </div>

            {/* Coordinate display / HUD could go here */}
        </div>
    );
}

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        width: '100%',
        height: '100%',
        padding: 40
    }
};
