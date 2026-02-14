import { Icon } from '@/types';

export const icons: Icon[] = [
  {
    id: 'camera',
    name: 'Camera',
    emoji: '📷',
    category: 'media',
    baseShape: 'circle',
    description: 'Photo and video capture'
  },
  {
    id: 'gallery',
    name: 'Gallery',
    emoji: '🖼️',
    category: 'media',
    baseShape: 'square',
    description: 'Image gallery and album'
  },
  {
    id: 'music',
    name: 'Music',
    emoji: '🎵',
    category: 'media',
    baseShape: 'circle',
    description: 'Audio and music player'
  },
  {
    id: 'phone',
    name: 'Phone',
    emoji: '📱',
    category: 'communication',
    baseShape: 'rounded',
    description: 'Phone and communication'
  },
  {
    id: 'message',
    name: 'Messages',
    emoji: '💬',
    category: 'communication',
    baseShape: 'rounded',
    description: 'Chat and messaging'
  },
  {
    id: 'mail',
    name: 'Email',
    emoji: '✉️',
    category: 'communication',
    baseShape: 'rounded',
    description: 'Email and inbox'
  },
  {
    id: 'bank',
    name: 'Bank',
    emoji: '🏦',
    category: 'finance',
    baseShape: 'rounded',
    description: 'Banking and finance'
  },
  {
    id: 'wallet',
    name: 'Wallet',
    emoji: '👛',
    category: 'finance',
    baseShape: 'rounded',
    description: 'Payments and wallet'
  },
  {
    id: 'chart',
    name: 'Analytics',
    emoji: '📊',
    category: 'finance',
    baseShape: 'square',
    description: 'Charts and analytics'
  },
  {
    id: 'map',
    name: 'Maps',
    emoji: '🗺️',
    category: 'navigation',
    baseShape: 'rounded',
    description: 'Maps and navigation'
  },
  {
    id: 'compass',
    name: 'Compass',
    emoji: '🧭',
    category: 'navigation',
    baseShape: 'circle',
    description: 'Directions and compass'
  },
  {
    id: 'settings',
    name: 'Settings',
    emoji: '⚙️',
    category: 'system',
    baseShape: 'rounded',
    description: 'Settings and configuration'
  },
  {
    id: 'user',
    name: 'Profile',
    emoji: '👤',
    category: 'system',
    baseShape: 'circle',
    description: 'User profile and account'
  },
  {
    id: 'home',
    name: 'Home',
    emoji: '🏠',
    category: 'system',
    baseShape: 'rounded',
    description: 'Home and dashboard'
  },
  {
    id: 'car',
    name: 'Vehicle',
    emoji: '🚗',
    category: 'transport',
    baseShape: 'rounded',
    description: 'Vehicles and transport'
  },
  {
    id: 'shop',
    name: 'Store',
    emoji: '🏪',
    category: 'commerce',
    baseShape: 'rounded',
    description: 'Shop and marketplace'
  },
  {
    id: 'cart',
    name: 'Cart',
    emoji: '🛒',
    category: 'commerce',
    baseShape: 'rounded',
    description: 'Shopping cart'
  },
  {
    id: 'tools',
    name: 'Tools',
    emoji: '🛠️',
    category: 'services',
    baseShape: 'square',
    description: 'Tools and utilities'
  },
  {
    id: 'calendar',
    name: 'Calendar',
    emoji: '📅',
    category: 'utility',
    baseShape: 'square',
    description: 'Calendar and events'
  },
  {
    id: 'clock',
    name: 'Clock',
    emoji: '⏰',
    category: 'utility',
    baseShape: 'circle',
    description: 'Time and clock'
  }
];

export const getIconById = (id: string): Icon | undefined => 
  icons.find(icon => icon.id === id);

export const getIconsByCategory = (category: string): Icon[] => {
  if (category === 'all') return icons;
  return icons.filter(icon => icon.category === category);
};

export const getCategories = (): string[] => {
  const categories = new Set(icons.map(icon => icon.category));
  return ['all', ...Array.from(categories)];
};
