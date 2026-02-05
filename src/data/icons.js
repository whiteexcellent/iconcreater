// ============================================================================
// ICONS DATA - Pure Data Layer (No Library Dependencies)
// All icon rendering is handled by theme-specific Art Engines
// ============================================================================

export const ICONS = [
    // Communication
    { id: 'phone', name: 'Telefon', category: 'communication' },
    { id: 'messages', name: 'Mesajlar', category: 'communication' },
    { id: 'contacts', name: 'Kişiler', category: 'communication' },
    { id: 'email', name: 'E-posta', category: 'communication' },

    // Media
    { id: 'camera', name: 'Kamera', category: 'media' },
    { id: 'gallery', name: 'Galeri', category: 'media' },
    { id: 'video', name: 'Video', category: 'media' },
    { id: 'music', name: 'Müzik', category: 'media' },
    { id: 'spotify', name: 'Spotify', category: 'media' },

    // Tools
    { id: 'maps', name: 'Haritalar', category: 'tools' },
    { id: 'gps', name: 'GPS', category: 'tools' },
    { id: 'calendar', name: 'Takvim', category: 'tools' },
    { id: 'clock', name: 'Saat', category: 'tools' },
    { id: 'calculator', name: 'Hesap Makinesi', category: 'tools' },
    { id: 'flashlight', name: 'Fener', category: 'tools' },
    { id: 'weather', name: 'Hava Durumu', category: 'tools' },

    // System
    { id: 'settings', name: 'Ayarlar', category: 'system' },
    { id: 'notifications', name: 'Bildirimler', category: 'system' },

    // Entertainment
    { id: 'games', name: 'Oyunlar', category: 'entertainment' },
    { id: 'casino', name: 'Kumarhane', category: 'entertainment' },

    // Finance
    { id: 'bank', name: 'Banka', category: 'finance' },

    // Services
    { id: 'taxi', name: 'Taksi', category: 'services' },
    { id: 'home', name: 'Emlak', category: 'services' },
    { id: 'food', name: 'Yemek', category: 'services' },
    { id: 'electrician', name: 'Elektrikçi', category: 'services' },
    { id: 'mechanic', name: 'Tamirci', category: 'services' },

    // Shopping
    { id: 'market', name: 'Market', category: 'shopping' },
    { id: 'shop247', name: '7/24 Market', category: 'shopping' },

    // Work
    { id: 'business', name: 'İş', category: 'work' },

    // Internet
    { id: 'browser', name: 'Tarayıcı', category: 'internet' },

    // Emergency
    { id: 'hospital', name: 'Hastane', category: 'emergency' },
    { id: 'police', name: 'Polis', category: 'emergency' },

    // Special
    { id: 'gang', name: 'İllegal', category: 'special' },
];

export const CATEGORIES = [
    { id: 'communication', name: 'İletişim', icon: '📱' },
    { id: 'media', name: 'Medya', icon: '🎬' },
    { id: 'tools', name: 'Araçlar', icon: '🔧' },
    { id: 'system', name: 'Sistem', icon: '⚙️' },
    { id: 'entertainment', name: 'Eğlence', icon: '🎮' },
    { id: 'finance', name: 'Finans', icon: '💰' },
    { id: 'services', name: 'Servisler', icon: '🚕' },
    { id: 'shopping', name: 'Alışveriş', icon: '🛒' },
    { id: 'work', name: 'İş', icon: '💼' },
    { id: 'internet', name: 'İnternet', icon: '🌐' },
    { id: 'emergency', name: 'Acil', icon: '🚨' },
    { id: 'special', name: 'Özel', icon: '💀' },
    { id: 'custom', name: 'Custom', icon: '✏️' },
];

// Icon categories as key-value for drawing feature
export const ICON_CATEGORIES = {
    communication: { label: 'İletişim', icon: '📱' },
    media: { label: 'Medya', icon: '🎬' },
    tools: { label: 'Araçlar', icon: '🔧' },
    system: { label: 'Sistem', icon: '⚙️' },
    entertainment: { label: 'Eğlence', icon: '🎮' },
    finance: { label: 'Finans', icon: '💰' },
    services: { label: 'Servisler', icon: '🚕' },
    shopping: { label: 'Alışveriş', icon: '🛒' },
    work: { label: 'İş', icon: '💼' },
    internet: { label: 'İnternet', icon: '🌐' },
    emergency: { label: 'Acil', icon: '🚨' },
    special: { label: 'Özel', icon: '💀' },
    custom: { label: 'Custom', icon: '✏️' },
};

// ============================================================================
// THEME PRESETS
// Each theme maps to a specific Art Engine with custom SVG rendering
// ============================================================================

export const THEME_PRESETS = {
    // === SIGNATURE THEMES ===
    v1: {
        name: 'Neo Brutalist',
        engine: 'Flat',
        colors: { bg: '#f43f5e', primary: '#1a1a1a', border: '#000000' },
        description: 'Kalın çizgiler, keskin köşeler, hard shadows'
    },
    v2: {
        name: 'Jelly Gummy',
        engine: 'Jelly',
        colors: { bg: '#a855f7', primary: '#ffffff', border: '#ffffff' },
        description: 'Yumuşak, şişkin, 3D gummy görünüm'
    },
    v3: {
        name: 'Kawaii UwU',
        engine: 'Kawaii',
        colors: { bg: '#ff69b4', primary: '#ffffff', border: '#ffb6c1' },
        description: 'Sevimli, yuvarlak, Sanrio stili'
    },
    v4: {
        name: 'Cloud Soft',
        engine: 'Cloud',
        colors: { bg: '#e0f2fe', primary: '#0ea5e9', border: '#bae6fd' },
        description: 'Neumorphism, bulutsu, yumuşak gölgeler'
    },

    // === CYBER/TECH THEMES ===
    v7: {
        name: 'Cyberpunk 2077',
        engine: 'Cyber',
        colors: { bg: '#09090b', primary: '#00ff9d', border: '#00ff9d' },
        description: 'Neon, devre tahtası, Blade Runner'
    },
    v14: {
        name: 'Dark Hacker',
        engine: 'Cyber',
        colors: { bg: '#000000', primary: '#00ff00', border: '#003300' },
        description: 'Matrix, terminal, hacker estetiği'
    },

    // === RETRO/PIXEL ===
    v8: {
        name: 'Retro CRT',
        engine: 'Pixel',
        colors: { bg: '#1a1a2e', primary: '#00ff88', border: '#16213e' },
        description: '8-bit piksel, NES/CRT monitör'
    },

    // === ARTISTIC ===
    v17: {
        name: 'Street Art',
        engine: 'Street',
        colors: { bg: '#262626', primary: '#facc15', border: '#404040' },
        description: 'Graffiti, stencil, Banksy stili'
    },
    v20: {
        name: 'Sketch Book',
        engine: 'Sketch',
        colors: { bg: '#fef3c7', primary: '#292524', border: '#d6d3d1' },
        description: 'El çizimi, karalama, defter'
    },
    v24: {
        name: 'Luxury Deco',
        engine: 'Luxury',
        colors: { bg: '#1c1917', primary: '#fbbf24', border: '#451a03' },
        description: 'Art Deco, altın, zarif çizgiler'
    },

    // === PLATFORM ===
    v12: {
        name: 'Material You',
        engine: 'Material',
        colors: { bg: '#f1f5f9', primary: '#6366f1', border: '#e2e8f0' },
        description: 'Android 14, organik formlar'
    },
    v13: {
        name: 'iOS Glass',
        engine: 'iOS',
        colors: { bg: '#f8fafc', primary: '#0ea5e9', border: '#e2e8f0' },
        description: 'Apple minimalist, temiz'
    },

    // === SPECIALTY ===
    v19: {
        name: 'Medical EMS',
        engine: 'Medical',
        colors: { bg: '#ffffff', primary: '#ef4444', border: '#fee2e2' },
        description: 'Klinik, profesyonel, tıbbi'
    },
    v28: {
        name: 'Kawaii Blob',
        engine: 'Kawaii',
        colors: { bg: '#ffe4e1', primary: '#ff1493', border: '#ffb6c1' },
        description: 'Ekstra sevimli, pastel'
    },
};

// ============================================================================
// THEME-SPECIFIC EXTRA ICONS (Future Feature)
// These icons are only available in their respective themes
// ============================================================================

export const THEME_EXTRA_ICONS = {
    v7: [ // Cyberpunk
        { id: 'hacker', name: 'Hacker', category: 'cyber' },
        { id: 'drone', name: 'Drone', category: 'cyber' },
        { id: 'vpn', name: 'VPN', category: 'cyber' },
        { id: 'crypto', name: 'Crypto', category: 'cyber' },
        { id: 'ai', name: 'AI', category: 'cyber' },
        { id: 'robot', name: 'Robot', category: 'cyber' },
        { id: 'firewall', name: 'Firewall', category: 'cyber' },
        { id: 'darknet', name: 'Darknet', category: 'cyber' },
    ],
    v19: [ // Medical
        { id: 'ambulance', name: 'Ambulans', category: 'medical' },
        { id: 'pill', name: 'İlaç', category: 'medical' },
        { id: 'syringe', name: 'Şırınga', category: 'medical' },
        { id: 'heartbeat', name: 'Kalp Atışı', category: 'medical' },
        { id: 'xray', name: 'Röntgen', category: 'medical' },
        { id: 'dna', name: 'DNA', category: 'medical' },
        { id: 'blood', name: 'Kan', category: 'medical' },
        { id: 'surgery', name: 'Cerrahi', category: 'medical' },
    ],
    v17: [ // Street
        { id: 'skateboard', name: 'Kaykay', category: 'street' },
        { id: 'boombox', name: 'Boombox', category: 'street' },
        { id: 'spray', name: 'Sprey', category: 'street' },
        { id: 'tag', name: 'Tag', category: 'street' },
        { id: 'crew', name: 'Crew', category: 'street' },
        { id: 'hustle', name: 'Hustle', category: 'street' },
        { id: 'lowrider', name: 'Lowrider', category: 'street' },
        { id: 'chain', name: 'Zincir', category: 'street' },
    ],
    v24: [ // Luxury
        { id: 'champagne', name: 'Şampanya', category: 'luxury' },
        { id: 'yacht', name: 'Yat', category: 'luxury' },
        { id: 'diamond', name: 'Elmas', category: 'luxury' },
        { id: 'valet', name: 'Vale', category: 'luxury' },
        { id: 'penthouse', name: 'Penthouse', category: 'luxury' },
        { id: 'limousine', name: 'Limuzin', category: 'luxury' },
        { id: 'cigar', name: 'Puro', category: 'luxury' },
        { id: 'watch', name: 'Saat', category: 'luxury' },
    ],
    v8: [ // Pixel
        { id: 'arcade', name: 'Arcade', category: 'retro' },
        { id: 'joystick', name: 'Joystick', category: 'retro' },
        { id: 'cartridge', name: 'Kartuş', category: 'retro' },
        { id: 'highscore', name: 'Highscore', category: 'retro' },
        { id: 'boss', name: 'Boss', category: 'retro' },
        { id: 'powerup', name: 'Power-up', category: 'retro' },
        { id: 'coin', name: 'Coin', category: 'retro' },
        { id: 'lives', name: 'Lives', category: 'retro' },
    ],
    v3: [ // Kawaii
        { id: 'boba', name: 'Boba', category: 'cute' },
        { id: 'plushie', name: 'Peluş', category: 'cute' },
        { id: 'rainbow', name: 'Gökkuşağı', category: 'cute' },
        { id: 'cupcake', name: 'Cupcake', category: 'cute' },
        { id: 'kitten', name: 'Kedi', category: 'cute' },
        { id: 'bunny', name: 'Tavşan', category: 'cute' },
        { id: 'wand', name: 'Değnek', category: 'cute' },
        { id: 'cloud_happy', name: 'Mutlu Bulut', category: 'cute' },
    ],
};

// Helper function to get icons for a specific theme
export const getIconsForTheme = (themeId) => {
    const baseIcons = [...ICONS];
    const extraIcons = THEME_EXTRA_ICONS[themeId] || [];
    return [...baseIcons, ...extraIcons];
};

// Helper function to get categories for a specific theme
export const getCategoriesForTheme = (themeId) => {
    const baseCats = CATEGORIES.map(c => c.id);
    const extras = THEME_EXTRA_ICONS[themeId];
    if (extras && extras.length > 0) {
        const extraCat = extras[0].category;
        if (!baseCats.includes(extraCat)) {
            return [...baseCats, extraCat];
        }
    }
    return baseCats;
};
