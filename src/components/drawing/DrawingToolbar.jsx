import React from 'react';
import { useDrawing } from './DrawingContext';
import {
    ToolPanel,
    ColorPanel,
    StrokePanel,
    ViewPanel,
    ShortcutsPanel
} from './toolbar';

export default function DrawingToolbar() {
    const { state, actions } = useDrawing();

    const {
        tool, strokeColor, fillColor, strokeWidth, fillEnabled, opacity,
        zoom, gridVisible, snapToGrid
    } = state;

    return (
        <div style={styles.container}>
            {/* Tools Section */}
            <ToolPanel
                currentTool={tool}
                onToolChange={actions.setTool}
            />

            <div style={styles.divider} />

            {/* Colors Section */}
            <ColorPanel
                strokeColor={strokeColor}
                fillColor={fillColor}
                fillEnabled={fillEnabled}
                onStrokeChange={actions.setStrokeColor}
                onFillChange={actions.setFillColor}
                onFillToggle={() => actions.setFillEnabled(!fillEnabled)}
            />

            <div style={styles.divider} />

            {/* Stroke Section */}
            <StrokePanel
                strokeWidth={strokeWidth}
                opacity={opacity}
                onWidthChange={actions.setStrokeWidth}
                onOpacityChange={actions.setOpacity}
            />

            <div style={styles.divider} />

            {/* View Section */}
            <ViewPanel
                gridVisible={gridVisible}
                snapToGrid={snapToGrid}
                zoom={zoom}
                onToggleGrid={actions.toggleGrid}
                onToggleSnap={actions.toggleSnap}
                onZoomChange={actions.setZoom}
            />

            <div style={styles.divider} />

            {/* Shortcuts Section */}
            <ShortcutsPanel />
        </div>
    );
}

const styles = {
    container: {
        width: 180,
        backgroundColor: '#141414',
        borderRadius: 12,
        border: '1px solid #222',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        overflowY: 'auto',
        maxHeight: '100%'
    },
    divider: {
        height: 1,
        backgroundColor: '#222',
        margin: '2px 0'
    }
};
