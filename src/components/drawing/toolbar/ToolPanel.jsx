import React from 'react';
import { TOOLS } from '../../../hooks/useDrawingStore.jsx';

// Tool definitions
const TOOL_GROUPS = {
    draw: [
        { id: TOOLS.PENCIL, icon: '✏️', label: 'Pencil', shortcut: 'P' },
        { id: TOOLS.BRUSH, icon: '🖌️', label: 'Brush', shortcut: 'B' },
        { id: TOOLS.ERASER, icon: '🧽', label: 'Eraser', shortcut: 'E' },
    ],
    shapes: [
        { id: TOOLS.LINE, icon: '╱', label: 'Line', shortcut: 'L' },
        { id: TOOLS.RECT, icon: '▢', label: 'Rectangle', shortcut: 'R' },
        { id: TOOLS.CIRCLE, icon: '○', label: 'Circle', shortcut: 'O' },
    ],
    tools: [
        { id: TOOLS.FILL, icon: '🪣', label: 'Fill', shortcut: 'G' },
        { id: TOOLS.EYEDROPPER, icon: '🎨', label: 'Eyedropper', shortcut: 'I' },
    ]
};

export default function ToolPanel({ currentTool, onToolChange }) {
    return (
        <div style={styles.container}>
            {Object.entries(TOOL_GROUPS).map(([groupName, tools]) => (
                <div key={groupName} style={styles.group}>
                    <span style={styles.groupLabel}>{groupName.toUpperCase()}</span>
                    <div style={styles.grid}>
                        {tools.map(tool => (
                            <button
                                key={tool.id}
                                onClick={() => onToolChange(tool.id)}
                                title={`${tool.label} (${tool.shortcut})`}
                                style={{
                                    ...styles.btn,
                                    backgroundColor: currentTool === tool.id ? '#3b82f6' : '#1a1a1a',
                                    borderColor: currentTool === tool.id ? '#60a5fa' : '#333',
                                    boxShadow: currentTool === tool.id ? '0 0 12px rgba(59,130,246,0.5)' : 'none'
                                }}
                            >
                                <span style={{ fontSize: 18 }}>{tool.icon}</span>
                                <span style={styles.shortcut}>{tool.shortcut}</span>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
    },
    group: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    groupLabel: {
        fontSize: 9,
        fontWeight: 700,
        color: '#555',
        letterSpacing: 1
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 6
    },
    btn: {
        aspectRatio: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #333',
        borderRadius: 10,
        cursor: 'pointer',
        transition: 'all 0.15s',
        position: 'relative',
        minHeight: 44
    },
    shortcut: {
        position: 'absolute',
        bottom: 3,
        right: 3,
        fontSize: 8,
        color: '#666',
        fontWeight: 600
    }
};
