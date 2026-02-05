import React from 'react';

export default function StrokePanel({ strokeWidth, opacity, onWidthChange, onOpacityChange }) {
    return (
        <div style={styles.container}>
            <span style={styles.label}>STROKE</span>

            {/* Width */}
            <div style={styles.sliderGroup}>
                <div style={styles.sliderHeader}>
                    <span style={styles.sliderLabel}>Size</span>
                    <span style={styles.sliderValue}>{strokeWidth}px</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={strokeWidth}
                    onChange={(e) => onWidthChange(parseInt(e.target.value))}
                    style={styles.slider}
                />
            </div>

            {/* Opacity */}
            <div style={styles.sliderGroup}>
                <div style={styles.sliderHeader}>
                    <span style={styles.sliderLabel}>Opacity</span>
                    <span style={styles.sliderValue}>{Math.round(opacity * 100)}%</span>
                </div>
                <input
                    type="range"
                    min="10"
                    max="100"
                    value={opacity * 100}
                    onChange={(e) => onOpacityChange(parseInt(e.target.value) / 100)}
                    style={styles.slider}
                />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    label: {
        fontSize: 9,
        fontWeight: 700,
        color: '#555',
        letterSpacing: 1
    },
    sliderGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    },
    sliderHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sliderLabel: {
        fontSize: 11,
        color: '#888'
    },
    sliderValue: {
        fontSize: 11,
        color: '#aaa',
        fontWeight: 600
    },
    slider: {
        width: '100%',
        height: 4,
        accentColor: '#3b82f6',
        cursor: 'pointer'
    }
};
