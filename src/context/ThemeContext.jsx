import React, { createContext, useContext, useState } from 'react';
import { THEMES } from '../data/icons';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [activeTheme, setActiveTheme] = useState(THEMES[0]);
    const [customSettings, setCustomSettings] = useState({
        enabled: false,
        primaryColor: '#6366f1',
        secondaryColor: '#ec4899',
        accentColor: '#8b5cf6',
        blurIntensity: 20,
        borderRadius: 24,
        strokeWidth: 2,
    });

    const value = {
        activeTheme,
        setActiveTheme,
        customSettings,
        setCustomSettings,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
