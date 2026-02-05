import React, { useState } from 'react';
import { useDrawing } from './DrawingContext';

export default function LayerPanel() {
    const { state, actions } = useDrawing();
    const { layers, activeLayerId } = state;
    const [draggedId, setDraggedId] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState('');

    const handleDragStart = (e, id) => {
        setDraggedId(id);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e, id) => {
        e.preventDefault();
        if (draggedId === id) return;
    };

    const handleDrop = (e, targetId) => {
        e.preventDefault();
        if (draggedId === targetId) return;

        const draggedIndex = layers.findIndex(l => l.id === draggedId);
        const targetIndex = layers.findIndex(l => l.id === targetId);

        if (draggedIndex === -1 || targetIndex === -1) return;

        const newLayers = [...layers];
        const [removed] = newLayers.splice(draggedIndex, 1);
        newLayers.splice(targetIndex, 0, removed);

        actions.reorderLayers(newLayers);
        setDraggedId(null);
    };

    const handleRename = (id) => {
        const layer = layers.find(l => l.id === id);
        setEditingId(id);
        setEditName(layer?.name || '');
    };

    const submitRename = () => {
        if (editingId && editName.trim()) {
            actions.renameLayer(editingId, editName.trim());
        }
        setEditingId(null);
        setEditName('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') submitRename();
        if (e.key === 'Escape') {
            setEditingId(null);
            setEditName('');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h3 style={styles.title}>📚 Layers</h3>
                <button
                    onClick={() => actions.addLayer()}
                    style={styles.addBtn}
                    title="Add Layer"
                >
                    + New
                </button>
            </div>

            <div style={styles.layerList}>
                {[...layers].reverse().map((layer) => (
                    <div
                        key={layer.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, layer.id)}
                        onDragOver={(e) => handleDragOver(e, layer.id)}
                        onDrop={(e) => handleDrop(e, layer.id)}
                        onClick={() => actions.setActiveLayer(layer.id)}
                        style={{
                            ...styles.layerItem,
                            backgroundColor: activeLayerId === layer.id ? '#1a3a5c' : '#0a0a0a',
                            borderColor: activeLayerId === layer.id ? '#3b82f6' : '#222',
                            opacity: draggedId === layer.id ? 0.5 : 1
                        }}
                    >
                        {/* Visibility Toggle */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                actions.toggleLayerVisibility(layer.id);
                            }}
                            style={{
                                ...styles.iconBtn,
                                opacity: layer.visible ? 1 : 0.4
                            }}
                            title={layer.visible ? 'Hide' : 'Show'}
                        >
                            {layer.visible ? '👁️' : '👁️‍🗨️'}
                        </button>

                        {/* Layer Name */}
                        <div style={styles.layerInfo}>
                            {editingId === layer.id ? (
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    onBlur={submitRename}
                                    onKeyDown={handleKeyDown}
                                    autoFocus
                                    style={styles.nameInput}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            ) : (
                                <span
                                    onDoubleClick={() => handleRename(layer.id)}
                                    style={styles.layerName}
                                    title="Double-click to rename"
                                >
                                    {layer.name}
                                </span>
                            )}

                            {/* Layer indicators */}
                            <div style={styles.indicators}>
                                {layer.locked && <span style={styles.indicator}>🔒</span>}
                                {layer.opacity < 1 && (
                                    <span style={styles.opacityBadge}>
                                        {Math.round(layer.opacity * 100)}%
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Lock Toggle */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                actions.toggleLayerLock(layer.id);
                            }}
                            style={{
                                ...styles.iconBtn,
                                opacity: layer.locked ? 1 : 0.4
                            }}
                            title={layer.locked ? 'Unlock' : 'Lock'}
                        >
                            {layer.locked ? '🔒' : '🔓'}
                        </button>

                        {/* Actions */}
                        <div style={styles.actions}>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    actions.duplicateLayer(layer.id);
                                }}
                                style={styles.iconBtn}
                                title="Duplicate"
                            >
                                📋
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (layers.length > 1) actions.deleteLayer(layer.id);
                                }}
                                disabled={layers.length <= 1}
                                style={{
                                    ...styles.iconBtn,
                                    opacity: layers.length <= 1 ? 0.3 : 1
                                }}
                                title="Delete"
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Layer Opacity */}
            {activeLayerId && (
                <div style={styles.opacityControl}>
                    <span style={styles.opacityLabel}>
                        Opacity: {Math.round(layers.find(l => l.id === activeLayerId)?.opacity * 100 || 100)}%
                    </span>
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={layers.find(l => l.id === activeLayerId)?.opacity * 100 || 100}
                        onChange={(e) => actions.setLayerOpacity(activeLayerId, parseInt(e.target.value) / 100)}
                        style={styles.slider}
                    />
                </div>
            )}
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
        width: '100%'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        color: '#fff'
    },
    addBtn: {
        padding: '5px 10px',
        backgroundColor: '#1a3a5c',
        border: '1px solid #3b82f6',
        borderRadius: 6,
        color: '#60a5fa',
        fontSize: 10,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.15s'
    },
    layerList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        maxHeight: 200,
        overflowY: 'auto'
    },
    layerItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 10px',
        borderRadius: 8,
        border: '1px solid #222',
        cursor: 'pointer',
        transition: 'all 0.15s'
    },
    iconBtn: {
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: 12,
        borderRadius: 4,
        transition: 'all 0.1s'
    },
    layerInfo: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        minWidth: 0
    },
    layerName: {
        fontSize: 12,
        color: '#ddd',
        cursor: 'text',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    nameInput: {
        flex: 1,
        padding: '2px 6px',
        backgroundColor: '#0a0a0a',
        border: '1px solid #3b82f6',
        borderRadius: 4,
        color: '#fff',
        fontSize: 12,
        outline: 'none'
    },
    indicators: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
    },
    indicator: {
        fontSize: 10
    },
    opacityBadge: {
        fontSize: 8,
        backgroundColor: '#333',
        color: '#888',
        padding: '1px 4px',
        borderRadius: 4
    },
    actions: {
        display: 'flex',
        gap: 2
    },
    opacityControl: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        paddingTop: 8,
        borderTop: '1px solid #222'
    },
    opacityLabel: {
        fontSize: 10,
        color: '#888'
    },
    slider: {
        width: '100%',
        height: 4,
        accentColor: '#3b82f6',
        cursor: 'pointer'
    }
};
