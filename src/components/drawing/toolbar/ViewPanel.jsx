import React from 'react';

export default function ViewPanel({
    gridVisible,
    snapToGrid,
    zoom,
    onToggleGrid,
    onToggleSnap,
    onZoomChange
}) {
    return (
        <div style={styles.container}>
            <span style={styles.label}>VIEW</span>

            {/* Grid Toggle */}
            <label style={styles.checkboxRow}>
                <input
                    type="checkbox"
                    checked={gridVisible}
                    onChange={onToggleGrid}
                    style={styles.checkbox}
                />
                <span>Show Grid</span>
            </label>

            {/* Snap Toggle */}
            <label style={styles.checkboxRow}>
                <input
                    type="checkbox"
                    checked={snapToGrid}
                    onChange={onToggleSnap}
                    style={styles.checkbox}
                />
                <span>Snap to Grid</span>
            </label>

            {/* Zoom Controls */}
            <div style={styles.zoomRow}>
                <span style={styles.zoomLabel}>Zoom: {zoom}x</span>
                <div style={styles.zoomBtns}>
                    <button
                        onClick={() => onZoomChange(zoom - 1)}
                        disabled={zoom <= 1}
                        style={{
                            ...styles.zoomBtn,
                            opacity: zoom <= 1 ? 0.3 : 1
                        }}
                    >
                        −
                    </button>
                    <button
                        onClick={() => onZoomChange(zoom + 1)}
                        disabled={zoom >= 8}
                        style={{
                            ...styles.zoomBtn,
                            opacity: zoom >= 8 ? 0.3 : 1
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    },
    label: {
        fontSize: 9,
        fontWeight: 700,
        color: '#555',
        letterSpacing: 1
    },
    checkboxRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 12,
        color: '#aaa',
        cursor: 'pointer'
    },
    checkbox: {
        width: 14,
        height: 14,
        accentColor: '#3b82f6',
        cursor: 'pointer'
    },
    zoomRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4
    },
    zoomLabel: {
        fontSize: 11,
        color: '#888'
    },
    zoomBtns: {
        display: 'flex',
        gap: 4
    },
    zoomBtn: {
        width: 28,
        height: 28,
        borderRadius: 6,
        border: '1px solid #333',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontSize: 16,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.15s'
    }
};
