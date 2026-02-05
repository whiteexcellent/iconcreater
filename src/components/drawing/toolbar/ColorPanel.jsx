import React, { useState } from 'react';

// Color preset swatches
const COLOR_SWATCHES = [
    '#000000', '#ffffff', '#ef4444', '#f97316', '#eab308',
    '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
    '#94a3b8', '#78716c', '#991b1b', '#9a3412', '#854d0e',
    '#166534', '#0e7490', '#1d4ed8', '#6d28d9', '#be185d'
];

export default function ColorPanel({
    strokeColor,
    fillColor,
    fillEnabled,
    onStrokeChange,
    onFillChange,
    onFillToggle
}) {
    const [showSwatches, setShowSwatches] = useState(false);
    const [colorTarget, setColorTarget] = useState('stroke');

    const handleColorClick = (target) => {
        setColorTarget(target);
        setShowSwatches(!showSwatches || colorTarget !== target);
    };

    const handleSwatchClick = (color) => {
        if (colorTarget === 'stroke') {
            onStrokeChange(color);
        } else {
            onFillChange(color);
        }
    };

    const handleCustomColor = (e) => {
        if (colorTarget === 'stroke') {
            onStrokeChange(e.target.value);
        } else {
            onFillChange(e.target.value);
        }
    };

    return (
        <div style={styles.container}>
            <span style={styles.label}>COLORS</span>

            {/* Stroke Color */}
            <div style={styles.row}>
                <span style={styles.colorLabel}>Stroke</span>
                <button
                    onClick={() => handleColorClick('stroke')}
                    style={{
                        ...styles.preview,
                        backgroundColor: strokeColor,
                        border: strokeColor === '#ffffff' ? '1px solid #444' : 'none',
                        boxShadow: colorTarget === 'stroke' && showSwatches ? '0 0 0 2px #3b82f6' : 'none'
                    }}
                />
            </div>

            {/* Fill Color */}
            <div style={styles.row}>
                <span style={styles.colorLabel}>Fill</span>
                <button
                    onClick={() => handleColorClick('fill')}
                    style={{
                        ...styles.preview,
                        backgroundColor: fillEnabled ? fillColor : 'transparent',
                        border: !fillEnabled ? '2px dashed #444' : (fillColor === '#ffffff' ? '1px solid #444' : 'none'),
                        boxShadow: colorTarget === 'fill' && showSwatches ? '0 0 0 2px #3b82f6' : 'none'
                    }}
                />
                <label style={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={fillEnabled}
                        onChange={onFillToggle}
                    />
                    <span>Fill</span>
                </label>
            </div>

            {/* Swatch Grid */}
            {showSwatches && (
                <div style={styles.swatchGrid}>
                    {COLOR_SWATCHES.map((color, i) => (
                        <button
                            key={i}
                            onClick={() => handleSwatchClick(color)}
                            style={{
                                ...styles.swatch,
                                backgroundColor: color,
                                border: color === '#ffffff' ? '1px solid #444' : 'none',
                                boxShadow: (colorTarget === 'stroke' ? strokeColor : fillColor) === color
                                    ? '0 0 0 2px #fff, 0 0 0 4px #3b82f6'
                                    : 'none'
                            }}
                        />
                    ))}
                    <input
                        type="color"
                        value={colorTarget === 'stroke' ? strokeColor : fillColor}
                        onChange={handleCustomColor}
                        style={styles.colorInput}
                        title="Custom color"
                    />
                </div>
            )}
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
    row: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
    },
    colorLabel: {
        fontSize: 11,
        color: '#888',
        width: 40
    },
    preview: {
        width: 32,
        height: 32,
        borderRadius: 6,
        cursor: 'pointer',
        transition: 'all 0.15s'
    },
    checkbox: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        marginLeft: 'auto',
        fontSize: 10,
        color: '#888',
        cursor: 'pointer'
    },
    swatchGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 4,
        marginTop: 4,
        padding: 8,
        backgroundColor: '#0a0a0a',
        borderRadius: 8
    },
    swatch: {
        width: 26,
        height: 26,
        borderRadius: 4,
        cursor: 'pointer',
        transition: 'transform 0.1s'
    },
    colorInput: {
        width: 26,
        height: 26,
        padding: 0,
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer'
    }
};
