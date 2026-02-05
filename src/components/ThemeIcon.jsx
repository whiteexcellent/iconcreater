import React, { useMemo } from 'react';
import { THEME_PRESETS } from '../data/icons';

// ============================================================================
// ART ENGINE IMPORTS - All High-Fidelity Engines
// ============================================================================
import KawaiiArt from './art/Kawaii';
import CyberArt from './art/Cyber';
import StreetArt from './art/Street';
import LuxuryArt from './art/Luxury';
import PixelArt from './art/Pixel';
import SketchArt from './art/Sketch';
import JellyArt from './art/Jelly';
import CloudArt from './art/Cloud';
import MedicalArt from './art/Medical';
import FlatArt from './art/Flat';
import MaterialArt from './art/Material';
import IOSArt from './art/iOS';

// --- Helper Functions ---
const generateId = () => Math.random().toString(36).substr(2, 9);

// ============================================================================
// THEME TO ENGINE MAPPING
// Maps theme IDs to their corresponding Art Engine components
// ============================================================================
const ART_ENGINES = {
    // === SIGNATURE THEMES ===
    'v1': FlatArt,        // Classic Flat → Neo-Brutalism
    'v2': JellyArt,       // Jelly Origin → 3D Gummy
    'v3': KawaiiArt,      // UwU Kawaii → Sanrio Sticker
    'v4': CloudArt,       // Soft Cloud → Neumorphism

    // === CYBER/TECH THEMES ===
    'v7': CyberArt,       // Cyberpunk → Blade Runner
    'v14': CyberArt,       // Dark Web → Ghost in Shell

    // === RETRO/PIXEL ===
    'v8': PixelArt,       // Retro Pixel → CRT Monitor

    // === ARTISTIC ===
    'v17': StreetArt,      // Street Graffiti → Banksy
    'v20': SketchArt,      // Sketch Hand → Moleskine
    'v24': LuxuryArt,      // Luxury VIP → Art Deco

    // === PLATFORM ===
    'v12': MaterialArt,    // Material You → Android 14
    'v13': IOSArt,         // iOS 18 → Apple Glass

    // === SPECIALTY ===
    'v19': MedicalArt,     // EMS Medical → Hospital UI
    'v28': KawaiiArt,      // Kawaii variant
};

// ============================================================================
// MAIN COMPONENT - Routes to appropriate Art Engine
// ============================================================================
export default function ThemeIcon({ theme, icon, colors, size = 64, uid: propUid, showBackground = false }) {
    const preset = THEME_PRESETS[theme];
    if (!preset) return null;

    // Generate unique ID for SVG filters (prevents conflicts during export)
    const uid = useMemo(() => propUid || generateId(), [propUid]);

    // Get the appropriate Art Engine for this theme
    const ArtEngine = ART_ENGINES[theme];

    // If we have a specialized Art Engine, use it
    if (ArtEngine) {
        return <ArtEngine icon={icon} colors={colors} size={size} uid={uid} showBackground={showBackground} />;
    }

    // Fallback: Use FlatArt for any unmapped themes
    return <FlatArt icon={icon} colors={colors} size={size} uid={uid} showBackground={showBackground} />;
}

