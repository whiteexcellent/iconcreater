import React from 'react';

const SHORTCUTS = [
    { key: 'Ctrl+Z', label: 'Undo' },
    { key: 'Ctrl+Y', label: 'Redo' },
    { key: '[  ]', label: 'Brush Size' },
    { key: 'Scroll', label: 'Zoom' }
];

export default function ShortcutsPanel() {
    return (
        <div style={styles.container}>
            <span style={styles.label}>SHORTCUTS</span>
            <div style={styles.grid}>
                {SHORTCUTS.map((item, i) => (
                    <React.Fragment key={i}>
                        <span style={styles.key}>{item.key}</span>
                        <span style={styles.desc}>{item.label}</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '4px 8px'
    },
    key: {
        fontSize: 9,
        backgroundColor: '#1a1a1a',
        padding: '2px 6px',
        borderRadius: 4,
        color: '#888',
        fontFamily: 'monospace'
    },
    desc: {
        fontSize: 10,
        color: '#666'
    }
};
