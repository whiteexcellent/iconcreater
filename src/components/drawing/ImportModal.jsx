import React, { useState, useRef } from 'react';
import { validateSVG, extractMetadata } from '../../utils/svgValidator';
import { saveIcon } from '../../utils/iconStorage';
import { ICON_CATEGORIES } from '../../data/icons';

export default function ImportModal({ isOpen, onClose, onImport }) {
    const [file, setFile] = useState(null);
    const [svgData, setSvgData] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [validationResult, setValidationResult] = useState(null);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('custom');
    const [importing, setImporting] = useState(false);
    const [dragOver, setDragOver] = useState(false);

    const fileInputRef = useRef(null);

    if (!isOpen) return null;

    const handleFileSelect = async (selectedFile) => {
        if (!selectedFile) return;

        // Validate file type
        if (!selectedFile.name.endsWith('.svg') && !selectedFile.type.includes('svg')) {
            setValidationResult({ valid: false, error: 'Only SVG files are allowed' });
            return;
        }

        setFile(selectedFile);

        // Validate SVG content
        const result = await validateSVG(selectedFile);
        setValidationResult(result);

        if (result.valid) {
            setSvgData(result.data);

            // Extract metadata if present
            const meta = extractMetadata(result.data);
            if (meta) {
                setMetadata(meta);
                setName(meta.name || '');
                setCategory(meta.category || 'custom');
            } else {
                // Use filename as default name
                const defaultName = selectedFile.name.replace('.svg', '').replace(/[^a-zA-Z0-9_]/g, '_');
                setName(defaultName);
            }
        } else {
            setSvgData(null);
            setMetadata(null);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const droppedFile = e.dataTransfer.files[0];
        handleFileSelect(droppedFile);
    };

    const handleImport = async () => {
        if (!svgData || !name.trim()) return;

        setImporting(true);
        try {
            const savedIcon = await saveIcon({
                name: name.trim(),
                category,
                svgData
            });

            onImport?.(savedIcon);
            handleClose();
        } catch (error) {
            console.error('Failed to import icon:', error);
            alert('Failed to import icon');
        } finally {
            setImporting(false);
        }
    };

    const handleClose = () => {
        setFile(null);
        setSvgData(null);
        setMetadata(null);
        setValidationResult(null);
        setName('');
        setCategory('custom');
        onClose?.();
    };

    return (
        <div style={styles.overlay} onClick={handleClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Import SVG Icon</h2>
                    <button onClick={handleClose} style={styles.closeButton}>✕</button>
                </div>

                {/* Drop zone */}
                <div
                    style={{
                        ...styles.dropZone,
                        ...(dragOver ? styles.dropZoneActive : {})
                    }}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".svg,image/svg+xml"
                        onChange={(e) => handleFileSelect(e.target.files?.[0])}
                        style={{ display: 'none' }}
                    />

                    {file ? (
                        <div style={styles.fileInfo}>
                            <span style={styles.fileName}>{file.name}</span>
                            <span style={styles.fileSize}>
                                {(file.size / 1024).toFixed(1)} KB
                            </span>
                        </div>
                    ) : (
                        <>
                            <span style={styles.dropIcon}>📁</span>
                            <span style={styles.dropText}>
                                Drop SVG file here or click to browse
                            </span>
                            <span style={styles.dropHint}>Max 50KB</span>
                        </>
                    )}
                </div>

                {/* Validation result */}
                {validationResult && (
                    <div style={{
                        ...styles.validation,
                        backgroundColor: validationResult.valid
                            ? 'rgba(100,200,100,0.1)'
                            : 'rgba(200,100,100,0.1)',
                        borderColor: validationResult.valid ? '#4a8' : '#a44'
                    }}>
                        {validationResult.valid ? (
                            <span style={{ color: '#4a8' }}>✅ Security check passed</span>
                        ) : (
                            <span style={{ color: '#a44' }}>❌ {validationResult.error}</span>
                        )}
                    </div>
                )}

                {/* Preview (sandboxed) */}
                {svgData && validationResult?.valid && (
                    <>
                        <div style={styles.previewSection}>
                            <label style={styles.label}>Preview</label>
                            <div style={styles.previewContainer}>
                                <iframe
                                    sandbox=""
                                    srcDoc={`
                                        <!DOCTYPE html>
                                        <html>
                                        <head>
                                            <style>
                                                body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #fff; }
                                                svg { max-width: 100%; max-height: 100%; }
                                            </style>
                                        </head>
                                        <body>${svgData}</body>
                                        </html>
                                    `}
                                    style={styles.previewIframe}
                                    title="SVG Preview"
                                />
                            </div>
                        </div>

                        {/* Name input */}
                        <div style={styles.field}>
                            <label style={styles.label}>Icon Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z0-9_]/g, '_'))}
                                placeholder="my_icon"
                                style={styles.input}
                                maxLength={50}
                            />
                        </div>

                        {/* Category select */}
                        <div style={styles.field}>
                            <label style={styles.label}>Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={styles.select}
                            >
                                {Object.entries(ICON_CATEGORIES || {}).map(([key, cat]) => (
                                    <option key={key} value={key}>{cat.label || key}</option>
                                ))}
                                <option value="custom">Custom</option>
                            </select>
                        </div>

                        {/* Import button */}
                        <button
                            onClick={handleImport}
                            disabled={importing || !name.trim()}
                            style={styles.importButton}
                        >
                            {importing ? '⏳ Importing...' : '✓ Add to Library'}
                        </button>
                    </>
                )}

                {/* Security notice */}
                <div style={styles.securityNote}>
                    🔒 SVG files are validated and sanitized before import
                </div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
    },
    modal: {
        backgroundColor: '#1e1e1e',
        borderRadius: 16,
        padding: 24,
        width: 400,
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        margin: 0,
        fontSize: 18,
        fontWeight: 600,
        color: '#fff',
    },
    closeButton: {
        background: 'none',
        border: 'none',
        color: '#888',
        fontSize: 20,
        cursor: 'pointer',
        padding: 4,
    },
    dropZone: {
        border: '2px dashed #444',
        borderRadius: 12,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    dropZoneActive: {
        borderColor: '#6699ff',
        backgroundColor: 'rgba(100,150,255,0.1)',
    },
    dropIcon: {
        fontSize: 32,
    },
    dropText: {
        color: '#aaa',
        fontSize: 14,
    },
    dropHint: {
        color: '#666',
        fontSize: 11,
    },
    fileInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
    },
    fileName: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 500,
    },
    fileSize: {
        color: '#888',
        fontSize: 11,
    },
    validation: {
        padding: 12,
        borderRadius: 8,
        border: '1px solid',
        fontSize: 13,
    },
    previewSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    label: {
        fontSize: 11,
        fontWeight: 500,
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    previewContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewIframe: {
        width: 128,
        height: 128,
        border: 'none',
        borderRadius: 4,
        pointerEvents: 'none',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
    },
    input: {
        padding: '10px 12px',
        backgroundColor: '#2a2a2a',
        border: '1px solid #333',
        borderRadius: 8,
        color: '#fff',
        fontSize: 13,
        outline: 'none',
    },
    select: {
        padding: '10px 12px',
        backgroundColor: '#2a2a2a',
        border: '1px solid #333',
        borderRadius: 8,
        color: '#fff',
        fontSize: 13,
        outline: 'none',
        cursor: 'pointer',
    },
    importButton: {
        padding: '14px 20px',
        backgroundColor: '#4a6fff',
        border: 'none',
        borderRadius: 10,
        color: '#fff',
        fontSize: 14,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.15s',
    },
    securityNote: {
        textAlign: 'center',
        color: '#666',
        fontSize: 11,
        padding: 8,
    },
};
