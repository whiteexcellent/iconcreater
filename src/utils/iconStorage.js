// ============================================================================
// ICON STORAGE - IndexedDB with localStorage fallback
// Stores custom user-created icons
// ============================================================================

const DB_NAME = 'KawaiiIconDB';
const DB_VERSION = 1;
const STORE_NAME = 'customIcons';
const LS_KEY = 'kawaii_custom_icons';

let db = null;

/**
 * Initialize IndexedDB
 */
async function initDB() {
    if (db) return db;

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            console.warn('IndexedDB failed, using localStorage fallback');
            resolve(null);
        };

        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };

        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains(STORE_NAME)) {
                const store = database.createObjectStore(STORE_NAME, { keyPath: 'id' });
                store.createIndex('category', 'category', { unique: false });
                store.createIndex('createdAt', 'createdAt', { unique: false });
            }
        };
    });
}

/**
 * Generate unique ID
 */
function generateId() {
    return `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Save custom icon
 * @param {Object} icon - { name, category, svgData, layers? }
 * @returns {Promise<Object>} Saved icon with id
 */
export async function saveIcon(icon) {
    const iconData = {
        id: generateId(),
        name: icon.name,
        category: icon.category,
        svgData: icon.svgData,
        layers: icon.layers || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    const database = await initDB();

    if (database) {
        // Use IndexedDB
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.add(iconData);

            request.onsuccess = () => resolve(iconData);
            request.onerror = () => reject(request.error);
        });
    } else {
        // Fallback to localStorage
        const icons = getFromLocalStorage();
        icons.push(iconData);
        saveToLocalStorage(icons);
        return iconData;
    }
}

/**
 * Get all custom icons
 * @returns {Promise<Array>} Array of icons
 */
export async function getAllIcons() {
    const database = await initDB();

    if (database) {
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    } else {
        return getFromLocalStorage();
    }
}

/**
 * Get icons by category
 * @param {string} category
 * @returns {Promise<Array>}
 */
export async function getIconsByCategory(category) {
    const database = await initDB();

    if (database) {
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const index = store.index('category');
            const request = index.getAll(category);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    } else {
        const icons = getFromLocalStorage();
        return icons.filter(icon => icon.category === category);
    }
}

/**
 * Get single icon by ID
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export async function getIconById(id) {
    const database = await initDB();

    if (database) {
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    } else {
        const icons = getFromLocalStorage();
        return icons.find(icon => icon.id === id) || null;
    }
}

/**
 * Update existing icon
 * @param {string} id
 * @param {Object} updates
 * @returns {Promise<Object>}
 */
export async function updateIcon(id, updates) {
    const database = await initDB();

    if (database) {
        return new Promise(async (resolve, reject) => {
            const existing = await getIconById(id);
            if (!existing) {
                reject(new Error('Icon not found'));
                return;
            }

            const updated = {
                ...existing,
                ...updates,
                updatedAt: new Date().toISOString()
            };

            const tx = database.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.put(updated);

            request.onsuccess = () => resolve(updated);
            request.onerror = () => reject(request.error);
        });
    } else {
        const icons = getFromLocalStorage();
        const index = icons.findIndex(icon => icon.id === id);
        if (index === -1) throw new Error('Icon not found');

        icons[index] = { ...icons[index], ...updates, updatedAt: new Date().toISOString() };
        saveToLocalStorage(icons);
        return icons[index];
    }
}

/**
 * Delete icon by ID
 * @param {string} id
 * @returns {Promise<boolean>}
 */
export async function deleteIcon(id) {
    const database = await initDB();

    if (database) {
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(request.error);
        });
    } else {
        const icons = getFromLocalStorage();
        const filtered = icons.filter(icon => icon.id !== id);
        saveToLocalStorage(filtered);
        return true;
    }
}

/**
 * Clear all custom icons
 * @returns {Promise<boolean>}
 */
export async function clearAllIcons() {
    const database = await initDB();

    if (database) {
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.clear();

            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(request.error);
        });
    } else {
        localStorage.removeItem(LS_KEY);
        return true;
    }
}

// LocalStorage helpers
function getFromLocalStorage() {
    try {
        const data = localStorage.getItem(LS_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveToLocalStorage(icons) {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(icons));
    } catch (e) {
        console.error('localStorage save failed:', e);
    }
}

/**
 * Export icon as downloadable SVG file
 * @param {string} id - Icon ID
 */
export async function exportIcon(id) {
    const icon = await getIconById(id);
    if (!icon) throw new Error('Icon not found');

    const blob = new Blob([icon.svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.name}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
