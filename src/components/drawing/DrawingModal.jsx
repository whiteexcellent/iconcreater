import React, { useEffect, useState } from 'react';
import { useDrawing, DrawingProvider } from './DrawingContext';
import DrawingCanvas from './DrawingCanvas';
import DrawingToolbar from './DrawingToolbar';
import LayerPanel from './LayerPanel';
import HistoryPanel from './HistoryPanel';
import SavePanel from './SavePanel';

function DrawingModalContent({ onClose, onSave }) {
    const { state, actions } = useDrawing();

    // Keyboard shortcuts
    const handleKeyDown = React.useCallback((e) => {
        // Prevent shortcuts if input is focused
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const key = e.key.toLowerCase();

        if (e.ctrlKey || e.metaKey) {
            if (key === 'z') {
                e.preventDefault();
                actions.undo();
            } else if (key === 'y') {
                e.preventDefault();
                actions.redo();
            }
            return;
        }

        switch (key) {
            case 'p': actions.setTool('pencil'); break;
            case 'b': actions.setTool('brush'); break;
            case 'e': actions.setTool('eraser'); break;
            case 'l': actions.setTool('line'); break;
            case 'r': actions.setTool('rect'); break;
            case 'o': actions.setTool('circle'); break;
            case 'g': actions.setTool('fill'); break;
            case 'i': actions.setTool('eyedropper'); break;
            case '[':
                actions.setStrokeWidth(Math.max(1, state.strokeWidth - 1));
                break;
            case ']':
                actions.setStrokeWidth(Math.min(10, state.strokeWidth + 1));
                break;
            case 'escape':
                onClose?.();
                break;
        }
    }, [actions, state.strokeWidth, onClose]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!actions) return null; // Safety check

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                {/* Canvas Area - Absolute Full Size */}
                <div style={styles.canvasArea}>
                    <DrawingCanvas />
                </div>

                {/* Floating Header */}
                <div style={styles.floatingHeader}>
                    <div style={styles.headerTitle}>
                        <span style={styles.logoIcon}>✨</span>
                        <span>ICON STUDIO</span>
                    </div>
                    <div style={styles.headerInfo}>
                        {state.width}x{state.height} • {(state.zoom * 100).toFixed(0)}%
                    </div>
                    <button onClick={onClose} style={styles.closeBtn}>×</button>
                </div>

                {/* Floating Toolbar (Left) */}
                <div style={styles.floatingToolbar}>
                    <DrawingToolbar />
                </div>

                {/* Floating Panels (Right) */}
                <div style={styles.floatingPanels}>
                    <div style={styles.panelGlass}>
                        <LayerPanel />
                    </div>
                    <div style={styles.panelGlass}>
                        <HistoryPanel />
                    </div>
                    <div style={styles.actionPanelGlass}>
                        <SavePanel onSave={onSave} onClose={onClose} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DrawingModal(props) {
    if (!props.isOpen) return null;

    return (
        <DrawingProvider>
            <DrawingModalContent {...props} />
        </DrawingProvider>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.2s ease-out'
    },
    modal: {
        width: '95vw',
        height: '92vh',
        backgroundColor: '#09090b', // Deep dark background
        borderRadius: 24,
        boxShadow: '0 0 50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)',
        overflow: 'hidden',
        position: 'relative', // Context for absolute children
        display: 'flex'
    },
    canvasArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        background: 'radial-gradient(circle at center, #18181b 0%, #09090b 100%)',
    },
    floatingHeader: {
        position: 'absolute',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '8px 20px',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        color: '#a1a1aa',
        fontSize: 13,
        fontWeight: 500,
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
    },
    headerTitle: {
        color: '#fff',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        letterSpacing: '0.5px'
    },
    logoIcon: {
        fontSize: 16
    },
    closeBtn: {
        background: 'transparent',
        border: 'none',
        color: '#fb7185',
        fontSize: 20,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        marginLeft: 10,
        transition: 'transform 0.2s',
        lineHeight: 1
    },
    floatingToolbar: {
        position: 'absolute',
        left: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        maxHeight: '90%',
        overflowY: 'auto'
    },
    floatingPanels: {
        position: 'absolute',
        right: 20,
        top: 20,
        bottom: 20,
        width: 280,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        overflowY: 'auto',
        paddingRight: 4
    },
    panelGlass: {
        background: 'rgba(20, 20, 25, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        padding: 4
    },
    actionPanelGlass: {
        background: 'rgba(20, 20, 25, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        marginTop: 'auto'
    }
};
