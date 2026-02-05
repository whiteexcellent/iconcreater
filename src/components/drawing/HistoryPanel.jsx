
import React from 'react';
import { useDrawing } from './DrawingContext';

export default function HistoryPanel() {
    const { state, actions } = useDrawing();
    const { historyState } = state;
    const canUndo = historyState ? historyState.canUndo : false; // Safe access
    const canRedo = historyState ? historyState.canRedo : false;
    const history = historyState ? historyState.history : [];
    const historyIndex = historyState ? historyState.historyIndex : -1;

    // Get action description for history item
    const getActionLabel = (index) => {
        if (index === 0) return '🎨 Initial';
        // This logic might need adjustment based on actual history item structure
        // For now, assuming a generic edit label
        return `✏️ Edit #${index} `;
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <span style={styles.title}>History</span>
                <span style={styles.count}>
                    {/* Visual count if available */}
                </span>
            </div>

            <div style={styles.controls}>
                <button
                    style={{ ...styles.button, opacity: canUndo ? 1 : 0.5 }}
                    onClick={actions.undo}
                    disabled={!canUndo}
                >
                    Undo
                </button>
                <button
                    style={{ ...styles.button, opacity: canRedo ? 1 : 0.5 }}
                    onClick={actions.redo}
                    disabled={!canRedo}
                    title="Redo (Ctrl+Y)"
                >
                    ↪️ Redo
                </button>
            </div>

            {/* Timeline */}
            <div style={styles.timeline}>
                {history.length === 0 ? (
                    <div style={styles.emptyState}>
                        <span style={{ fontSize: 20, marginBottom: 4 }}>📭</span>
                        <span>No history yet</span>
                        <span style={{ fontSize: 10, color: '#555' }}>Start drawing to record</span>
                    </div>
                ) : (
                    <div style={styles.historyList}>
                        {history.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.historyItem,
                                    backgroundColor: index === historyIndex ? '#1a3a5c' : '#0a0a0a',
                                    borderColor: index === historyIndex ? '#3b82f6' : '#222'
                                }}
                            >
                                <div style={styles.historyDot}>
                                    <div style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: index === historyIndex ? '#3b82f6' : '#444'
                                    }} />
                                    {index < history.length - 1 && (
                                        <div style={styles.historyLine} />
                                    )}
                                </div>
                                <span style={styles.historyLabel}>
                                    {getActionLabel(index)}
                                </span>
                                {index === historyIndex && (
                                    <span style={styles.currentBadge}>Current</span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* History Info */}
            <div style={styles.info}>
                <span style={styles.infoText}>
                    {historyIndex + 1} / {history.length} states
                </span>
                <span style={styles.infoHint}>
                    Ctrl+Z / Ctrl+Y
                </span>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#141414',
        borderRadius: 12,
        border: '1px solid #222',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '100%',
        maxHeight: 200
    },
    title: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        color: '#fff'
    },
    buttons: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 6
    },
    btn: {
        padding: '8px 10px',
        backgroundColor: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: 8,
        color: '#fff',
        fontSize: 11,
        fontWeight: 500,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        transition: 'all 0.15s'
    },
    timeline: {
        flex: 1,
        overflowY: 'auto',
        maxHeight: 100
    },
    emptyState: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        color: '#666',
        fontSize: 11
    },
    historyList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    },
    historyItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 8px',
        borderRadius: 6,
        border: '1px solid transparent',
        transition: 'all 0.15s'
    },
    historyDot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    historyLine: {
        width: 1,
        height: 12,
        backgroundColor: '#333',
        position: 'absolute',
        top: 10
    },
    historyLabel: {
        fontSize: 11,
        color: '#aaa',
        flex: 1
    },
    currentBadge: {
        fontSize: 8,
        backgroundColor: '#3b82f6',
        color: '#fff',
        padding: '2px 6px',
        borderRadius: 4,
        fontWeight: 600,
        textTransform: 'uppercase'
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 6,
        borderTop: '1px solid #222'
    },
    infoText: {
        fontSize: 10,
        color: '#666'
    },
    infoHint: {
        fontSize: 9,
        color: '#444',
        fontFamily: 'monospace'
    }
};
