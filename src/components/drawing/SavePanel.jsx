import React, { useState, useRef, useEffect } from 'react';
import { useDrawing } from './DrawingContext';
import { exportToSVG, downloadSVG, copySVGToClipboard } from '../../utils/svgExporter';
import { saveIcon } from '../../utils/iconStorage';
import { ICON_CATEGORIES } from '../../data/icons';
import { createPathElement } from '../../utils/svgExporter'; // Might need update or reuse

const PREVIEW_SIZES = [16, 32, 48, 64];
const BG_OPTIONS = [
    { id: 'transparent', label: '🔲', color: null },
    { id: 'white', label: '⬜', color: '#ffffff' },
    { id: 'black', label: '⬛', color: '#000000' },
    { id: 'dark', label: '🌑', color: '#1a1a2e' },
];

export default function SavePanel({ onSave, onClose }) {
    const { state, engine } = useDrawing();
    const [name, setName] = useState('my_custom_icon');
    const [category, setCategory] = useState('custom');
    const [isSaving, setIsSaving] = useState(false);
    const [copied, setCopied] = useState(false);
    const [previewBg, setPreviewBg] = useState('transparent');
    const [svgPreview, setSvgPreview] = useState('');

    // Helper to get export layers, handling flat engine elements
    const getExportLayers = () => {
        let exportLayers = state.layers;
        // If engine elements exist and state.layers are not yet structured with 'elements' property
        if (engine && engine.elements && state.layers[0] && !state.layers[0].elements) {
            exportLayers = state.layers.map(l => ({
                ...l,
                elements: engine.elements.filter(el => el.layerId === l.id)
            }));
        }
        return exportLayers;
    };

    // Generate SVG preview
    useEffect(() => {
        const exportLayers = getExportLayers();
        const svg = exportToSVG(exportLayers, {
            width: state.width || 64,
            height: state.height || 64,
            name,
            category,
            includeMetadata: false,
            optimize: true
        });
        setSvgPreview(svg);
    }, [state.layers, state.width, state.height, name, category, engine?.elements]);

    const handleDownload = () => {
        const exportLayers = getExportLayers();
        const svgContent = exportToSVG(exportLayers, {
            width: state.width || 64,
            height: state.height || 64,
            name,
            category
        });
        downloadSVG(svgContent, `${name}.svg`);
    };

    const handleCopy = async () => {
        const svg = exportToSVG(state.layers, {
            width: 64,
            height: 64,
            name,
            category
        });
        const success = await copySVGToClipboard(svg);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleSaveToLibrary = async () => {
        setIsSaving(true);
        try {
            const svg = exportToSVG(state.layers, {
                width: 64,
                height: 64,
                name,
                category
            });

            const iconData = {
                name,
                category,
                svg,
                createdAt: Date.now(),
                layers: state.layers
            };

            await saveIcon(iconData);
            onSave?.(iconData);
        } catch (err) {
            console.error('Save failed:', err);
        } finally {
            setIsSaving(false);
        }
    };

    const getBgColor = () => {
        const bg = BG_OPTIONS.find(b => b.id === previewBg);
        return bg?.color;
    };

    const getCheckeredStyle = () => {
        if (previewBg !== 'transparent') return {};
        return {
            backgroundImage: `
                linear-gradient(45deg, #ccc 25%, transparent 25%),
                linear-gradient(-45deg, #ccc 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #ccc 75%),
                linear-gradient(-45deg, transparent 75%, #ccc 75%)
            `,
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
        };
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>💾 Save Icon</h3>

            {/* Name Input */}
            <div style={styles.field}>
                <label style={styles.label}>NAME</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z0-9_-]/g, '_'))}
                    placeholder="icon_name"
                    style={styles.input}
                />
            </div>

            {/* Category Select */}
            <div style={styles.field}>
                <label style={styles.label}>CATEGORY</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                >
                    {Object.entries(ICON_CATEGORIES).map(([id, cat]) => (
                        <option key={id} value={id}>
                            {cat.icon} {cat.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Background Toggle */}
            <div style={styles.field}>
                <label style={styles.label}>PREVIEW BACKGROUND</label>
                <div style={styles.bgOptions}>
                    {BG_OPTIONS.map(bg => (
                        <button
                            key={bg.id}
                            onClick={() => setPreviewBg(bg.id)}
                            style={{
                                ...styles.bgBtn,
                                borderColor: previewBg === bg.id ? '#3b82f6' : '#333',
                                boxShadow: previewBg === bg.id ? '0 0 8px rgba(59,130,246,0.5)' : 'none'
                            }}
                            title={bg.id}
                        >
                            {bg.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Preview Grid */}
            <div style={styles.field}>
                <label style={styles.label}>PREVIEW</label>
                <div style={styles.previewGrid}>
                    {PREVIEW_SIZES.map(size => (
                        <div key={size} style={styles.previewItem}>
                            <div
                                style={{
                                    ...styles.previewBox,
                                    width: Math.max(size, 32),
                                    height: Math.max(size, 32),
                                    backgroundColor: getBgColor() || 'transparent',
                                    ...getCheckeredStyle()
                                }}
                            >
                                <div
                                    style={{
                                        width: size,
                                        height: size,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: svgPreview }}
                                />
                            </div>
                            <span style={styles.previewLabel}>{size}px</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div style={styles.actions}>
                <button onClick={handleDownload} style={styles.actionBtn}>
                    📥 Download SVG
                </button>
                <button
                    onClick={handleCopy}
                    style={{
                        ...styles.actionBtn,
                        backgroundColor: copied ? '#22c55e' : styles.actionBtn.backgroundColor
                    }}
                >
                    {copied ? '✓ Copied!' : '📋 Copy SVG'}
                </button>
            </div>

            <button
                onClick={handleSaveToLibrary}
                disabled={isSaving || !name.trim()}
                style={{
                    ...styles.saveBtn,
                    opacity: isSaving || !name.trim() ? 0.5 : 1
                }}
            >
                {isSaving ? '⏳ Saving...' : '💾 Save to Library'}
            </button>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#141414',
        borderRadius: 12,
        border: '1px solid #222',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        width: '100%',
        maxWidth: 260
    },
    title: {
        margin: 0,
        fontSize: 15,
        fontWeight: 600,
        color: '#fff',
        paddingBottom: 8,
        borderBottom: '1px solid #222'
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    label: {
        fontSize: 9,
        fontWeight: 700,
        color: '#555',
        letterSpacing: 1
    },
    input: {
        width: '100%',
        padding: '10px 12px',
        backgroundColor: '#0a0a0a',
        border: '1px solid #333',
        borderRadius: 8,
        color: '#fff',
        fontSize: 13,
        outline: 'none',
        boxSizing: 'border-box'
    },
    select: {
        width: '100%',
        padding: '10px 12px',
        backgroundColor: '#0a0a0a',
        border: '1px solid #333',
        borderRadius: 8,
        color: '#fff',
        fontSize: 13,
        outline: 'none',
        cursor: 'pointer',
        boxSizing: 'border-box'
    },
    bgOptions: {
        display: 'flex',
        gap: 8
    },
    bgBtn: {
        width: 36,
        height: 36,
        borderRadius: 8,
        border: '2px solid #333',
        backgroundColor: '#1a1a1a',
        fontSize: 18,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.15s'
    },
    previewGrid: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 12,
        padding: 12,
        backgroundColor: '#0a0a0a',
        borderRadius: 8,
        border: '1px solid #222'
    },
    previewItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
    },
    previewBox: {
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        border: '1px solid #333'
    },
    previewLabel: {
        fontSize: 9,
        color: '#666'
    },
    actions: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
    },
    actionBtn: {
        padding: '10px 12px',
        backgroundColor: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: 8,
        color: '#fff',
        fontSize: 11,
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.15s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    },
    saveBtn: {
        width: '100%',
        padding: '14px',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        border: 'none',
        borderRadius: 10,
        color: '#fff',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 12px rgba(59,130,246,0.3)'
    }
};
