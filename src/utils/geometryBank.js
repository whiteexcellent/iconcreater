// A central repository of raw SVG center paths for the 33 mapped FiveM apps.
// Inherits fills and strokes from the parent container.
export const GEOMETRY_BANK = {
    messages: `<path d="M 50 60 L 150 60 L 150 120 L 100 120 L 70 150 L 70 120 L 50 120 Z" />`,
    contacts: `<circle cx="100" cy="80" r="25" /><path d="M 50 160 L 50 140 C 50 120 70 115 100 115 C 130 115 150 120 150 140 L 150 160" />`,
    bank: `<circle cx="100" cy="100" r="35" /><path d="M100 50V150M85 85H115M85 115H115" />`,
    maps: `<path d="M 50 150 L 80 130 L 120 160 L 150 120 L 150 50 L 120 90 L 80 60 L 50 80 ZM80 130V60M120 160V90" /><circle cx="120" cy="90" r="6" />`,
    gallery: `<rect x="55" y="55" width="90" height="90" rx="10" /><circle cx="85" cy="85" r="10" /><path d="M55 120 L80 95 L110 125 L130 105 L145 120" />`,
    store: `<path d="M60 90 H140 V150 C140 160 130 165 120 165 H80 C70 165 60 160 60 150 V90Z" /><path d="M80 90 V70 C80 50 120 50 120 70 V90" />`,
    settings: `<path d="M100 60 C110 60 115 65 118 70 L124 72 C132 68 140 70 144 76 C148 82 148 90 144 95 L146 100 C152 102 155 108 155 115 C155 122 152 128 146 130 L144 135 C148 140 148 148 144 154 C140 160 132 162 124 158 L118 160 C115 165 110 170 100 170 C90 170 85 165 82 160 L76 158 C68 162 60 160 56 154 C52 148 52 140 56 135 L54 130 C48 128 45 122 45 115 C45 108 48 102 54 100 L56 95 C52 90 52 82 56 76 C60 70 68 68 76 72 L82 70 C85 65 90 60 100 60Z" /><circle cx="100" cy="115" r="20" />`,
    camera: `<rect x="40" y="70" width="120" height="70" rx="10" /><path d="M70 70 V60 C70 50 130 50 130 60 V70" /><circle cx="100" cy="105" r="20" />`,
    weather: `<circle cx="85" cy="85" r="20" /><path d="M65 120 C50 120 50 95 65 95 C70 80 110 70 120 90 C135 90 135 120 120 120 Z" />`,
    music: `<circle cx="100" cy="100" r="45" /><path d="M90 110 C85 110 80 115 80 120 C80 125 85 130 90 130 C95 130 100 125 100 120 V85 L125 80 V105 C120 105 115 110 115 115 C115 120 120 125 125 125 C130 125 135 120 135 115 V65 L90 75 V110 Z" />`,
    notes: `<rect x="65" y="50" width="70" height="100" rx="5" /><rect x="80" y="75" width="40" height="4" /><rect x="80" y="95" width="40" height="4" /><rect x="80" y="115" width="30" height="4" />`,
    calendar: `<rect x="55" y="60" width="90" height="85" rx="8" /><path d="M55 75 H145 M75 50V70 M125 50V70" /><circle cx="100" cy="115" r="8" />`,
    calculator: `<rect x="65" y="50" width="70" height="100" rx="10" /><rect x="75" y="65" width="50" height="20" rx="2" /><circle cx="85" cy="100" r="5" /><circle cx="100" cy="100" r="5" /><circle cx="115" cy="100" r="5" /><circle cx="85" cy="115" r="5" /><circle cx="100" cy="115" r="5" /><circle cx="115" cy="115" r="5" /><rect x="80" y="125" width="40" height="10" rx="5" />`,
    emergency: `<circle cx="100" cy="100" r="45" /><path d="M90 70 H110 V90 H130 V110 H110 V130 H90 V110 H70 V90 H90 V70Z" />`,
    garage: `<path d="M50 100 L100 65 L150 100 V140 H50 Z" /><rect x="70" y="110" width="60" height="30" /><path d="M70 115 H130 M70 125 H130 M70 135 H130" />`,
    mail: `<rect x="50" y="70" width="100" height="65" rx="8" /><path d="M50 80 L100 110 L150 80" />`,
    twitter: `<path d="M125 80L85 125H75L115 80H125Z M80 80L125 125H135L90 80H80Z" />`,
    instagram: `<rect x="60" y="60" width="80" height="80" rx="20" /><circle cx="100" cy="100" r="15" /><circle cx="120" cy="80" r="4" />`,
    whatsapp: `<path d="M55 145 C65 125 55 105 65 85 C85 55 135 65 145 95 C155 125 125 155 95 145 C85 145 65 155 55 145Z" /><path d="M85 90 C90 85 95 95 100 100 C105 105 115 100 120 95 C125 90 130 95 130 100 C130 110 120 125 105 125 C85 125 75 105 75 95 C75 90 80 85 85 90Z" />`,
    discord: `<path d="M130 75 C130 75 115 65 100 65 C85 65 70 75 70 75 C60 95 50 120 50 135 C60 150 75 150 75 150 L85 135 C75 130 75 130 75 130 C95 145 105 145 125 130 C125 130 125 130 115 135 L125 150 C125 150 140 150 150 135 C150 120 140 95 130 75Z" /><circle cx="85" cy="105" r="8" /><circle cx="115" cy="105" r="8" />`,
    tiktok: `<path d="M115 60V120C115 135 105 145 90 145C80 145 70 135 70 120C70 105 80 95 90 95 V80C75 80 55 90 55 120 M115 80C125 90 140 90 145 90V65C130 65 120 60 115 55Z" />`,
    youtube: `<rect x="55" y="75" width="90" height="60" rx="15" /><path d="M90 90 V120 L115 105 Z" />`,
    tinder: `<path d="M95 65 C85 85 65 100 70 125 C75 145 105 145 120 135 C135 120 130 95 120 85 C120 85 125 100 115 115 C105 130 90 125 95 110 C100 95 100 65 95 65Z" />`,
    uber: `<circle cx="100" cy="100" r="35" /><rect x="105" y="90" width="30" height="20" rx="2" /><circle cx="100" cy="100" r="10" /><path d="M100 95 L110 95 V105 L100 105 Z" />`,
    darkchat: `<path d="M60 100 C60 75 75 60 100 60 C125 60 140 75 140 100 C140 125 125 140 100 140 C95 140 75 150 70 150 C75 140 70 130 65 120 C60 115 60 110 60 100Z" /><circle cx="85" cy="100" r="6" /><circle cx="115" cy="100" r="6" />`
};
