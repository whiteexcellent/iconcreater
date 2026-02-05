/**
 * 🌸 FiveM Kawaii Icon Engine
 * Sevimli, Pastel, Jöle Temalar
 * v1-v5 Cute Collection
 */

const THEME_CONFIG = {
  v1: {
    name: 'Flat',
    folder: 'icons/v1/',
    colors: ['#FFB6C1', '#E6E6FA', '#98FB98', '#FFDAB9'],
    description: 'Düz, minimalist pastel tasarım'
  },
  v2: {
    name: 'Jelly',
    folder: 'icons/v2/',
    colors: ['#FFCCCB', '#F0E68C', '#DDA0DD', '#98D8C8'],
    description: 'Jölemsi, yarı saydam şeker görünümü'
  },
  v3: {
    name: 'UwU 🐰',
    folder: 'icons/v3/',
    colors: ['#FFD1DC', '#FFF0F5', '#FFB6C1', '#FF69B4'],
    description: 'Sevimli, kawaii tarzı, bebek pembesi'
  },
  v4: {
    name: 'Soft ☁️',
    folder: 'icons/v4/',
    colors: ['#B0E0E6', '#F0F8FF', '#FFE4E1', '#E6E6FA'],
    description: 'Bulutumsu, pamuk şeker hissi'
  },
  v5: {
    name: 'Police 👮',
    folder: 'icons/v5/',
    colors: ['#87CEEB', '#B0C4DE', '#E6E6FA', '#F0F8FF'],
    description: 'Yumuşak taktik, profesyonel ama sevimli'
  }
};

const ICON_LIST = [
  { name: 'phone', category: 'communication' },
  { name: 'messages', category: 'communication' },
  { name: 'contacts', category: 'communication' },
  { name: 'email', category: 'communication' },
  { name: 'camera', category: 'media' },
  { name: 'gallery', category: 'media' },
  { name: 'video', category: 'media' },
  { name: 'music', category: 'media' },
  { name: 'spotify', category: 'media' },
  { name: 'maps', category: 'tools' },
  { name: 'gps', category: 'tools' },
  { name: 'calendar', category: 'tools' },
  { name: 'clock', category: 'tools' },
  { name: 'calculator', category: 'tools' },
  { name: 'flashlight', category: 'tools' },
  { name: 'weather', category: 'tools' },
  { name: 'settings', category: 'system' },
  { name: 'notifications', category: 'system' },
  { name: 'games', category: 'entertainment' },
  { name: 'casino', category: 'entertainment' },
  { name: 'bank', category: 'finance' },
  { name: 'taxi', category: 'services' },
  { name: 'home', category: 'services' },
  { name: 'food', category: 'services' },
  { name: 'electrician', category: 'services' },
  { name: 'mechanic', category: 'services' },
  { name: 'market', category: 'shopping' },
  { name: 'shop247', category: 'shopping' },
  { name: 'business', category: 'work' },
  { name: 'browser', category: 'internet' },
  { name: 'hospital', category: 'emergency' },
  { name: 'police', category: 'emergency' },
  { name: 'gang', category: 'special' }
];

const state = {
  currentTheme: 'v3',
  icons: [],
  favorites: JSON.parse(localStorage.getItem('kawaiiFavorites') || '[]'),
  view: 'grid',
  theme: 'pastel'
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  loadTheme('v3');
  setupEventListeners();
  updateStats();
  showToast('🐰 UwU! Kawaii ikonlar hazır!');
}

function loadTheme(themeId) {
  state.currentTheme = themeId;
  const config = THEME_CONFIG[themeId];
  
  state.icons = ICON_LIST.map(icon => ({
    ...icon,
    file: `${config.folder}${icon.name}.svg`,
    theme: themeId
  }));
  
  renderIcons(state.icons);
  updateThemeUI(config);
}

function updateThemeUI(config) {
  document.getElementById('currentThemeName').textContent = config.name;
  document.getElementById('currentThemeDesc').textContent = config.description;
  
  const colorDots = document.getElementById('themeColors');
  if (colorDots) {
    colorDots.innerHTML = config.colors.map(c => 
      `<span class="color-dot" style="background: ${c}"></span>`
    ).join('');
  }
  
  // Update active button
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.theme === state.currentTheme) {
      btn.classList.add('active');
    }
  });
}

function renderIcons(iconsToRender) {
  const grid = document.getElementById('iconsGrid');
  grid.innerHTML = '';
  
  if (iconsToRender.length === 0) {
    grid.innerHTML = '<div class="no-results">🔍 Sonuç bulunamadı</div>';
    return;
  }
  
  iconsToRender.forEach((icon, index) => {
    const card = createIconCard(icon, index);
    grid.appendChild(card);
  });
  
  updateStats();
}

function createIconCard(icon, index) {
  const card = document.createElement('div');
  card.className = `icon-card ${state.view}`;
  card.style.animationDelay = `${(index % 20) * 0.03}s`;
  
  const isFav = state.favorites.some(f => f.name === icon.name && f.theme === icon.theme);
  if (isFav) card.classList.add('favorite');
  
  card.innerHTML = `
    <div class="icon-wrapper">
      <img src="${icon.file}" alt="${icon.name}" loading="lazy">
    </div>
    <div class="icon-name">${icon.name}</div>
    <div class="icon-category">${icon.category}</div>
  `;
  
  card.addEventListener('click', () => openModal(icon));
  
  return card;
}

function setupEventListeners() {
  // Theme buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => loadTheme(btn.dataset.theme));
  });
  
  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = state.icons.filter(icon => 
      icon.name.toLowerCase().includes(query) ||
      icon.category.toLowerCase().includes(query)
    );
    renderIcons(filtered);
  });
  
  // View toggle
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.view = btn.dataset.view;
      document.getElementById('iconsGrid').className = `icons-grid ${state.view}`;
      renderIcons(state.icons);
    });
  });
  
  // Close modal
  document.querySelector('.close-modal')?.addEventListener('click', closeModal);
  document.getElementById('modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });
  
  // Modal actions
  document.getElementById('copyBtn')?.addEventListener('click', copySvg);
  document.getElementById('favBtn')?.addEventListener('click', () => {
    if (state.currentIcon) toggleFavorite(state.currentIcon);
  });
}

function openModal(icon) {
  state.currentIcon = icon;
  const modal = document.getElementById('modal');
  modal.classList.add('active');
  
  document.getElementById('modalTitle').textContent = icon.name;
  document.getElementById('modalCategory').textContent = icon.category;
  document.getElementById('modalIcon').src = icon.file;
  
  const isFav = state.favorites.some(f => f.name === icon.name && f.theme === icon.theme);
  document.getElementById('favBtn').textContent = isFav ? '💔 Favoriden Çıkar' : '❤️ Favoriye Ekle';
}

function closeModal() {
  document.getElementById('modal')?.classList.remove('active');
}

async function copySvg() {
  if (!state.currentIcon) return;
  
  try {
    const response = await fetch(state.currentIcon.file);
    const svg = await response.text();
    await navigator.clipboard.writeText(svg);
    showToast('✅ SVG kopyalandı!');
  } catch (e) {
    showToast('❌ Kopyalama başarısız');
  }
}

function toggleFavorite(icon) {
  const index = state.favorites.findIndex(f => f.name === icon.name && f.theme === icon.theme);
  
  if (index === -1) {
    state.favorites.push(icon);
    showToast('❤️ Favorilere eklendi!');
  } else {
    state.favorites.splice(index, 1);
    showToast('💔 Favorilerden çıkarıldı');
  }
  
  localStorage.setItem('kawaiiFavorites', JSON.stringify(state.favorites));
  renderIcons(state.icons);
  
  // Update modal button
  const isFav = index === -1;
  document.getElementById('favBtn').textContent = isFav ? '💔 Favoriden Çıkar' : '❤️ Favoriye Ekle';
}

function updateStats() {
  document.getElementById('iconCount').textContent = '33';
  document.getElementById('favCount').textContent = state.favorites.length;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
