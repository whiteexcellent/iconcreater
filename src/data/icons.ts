import { Icon } from '@/types';

export const ICONS: Icon[] = [
  {
    id: 'camera',
    name: 'Camera',
    category: 'media',
    baseShape: 'camera.svg',
    description: 'Photography and camera app'
  },
  {
    id: 'bank',
    name: 'Bank',
    category: 'finance',
    baseShape: 'bank.svg',
    description: 'Banking and financial services'
  },
  {
    id: 'car',
    name: 'Vehicle',
    category: 'transport',
    baseShape: 'car.svg',
    description: 'Garage and vehicle management'
  },
  {
    id: 'phone',
    name: 'Phone',
    category: 'communication',
    baseShape: 'phone.svg',
    description: 'Phone and contacts'
  },
  {
    id: 'message',
    name: 'Messages',
    category: 'communication',
    baseShape: 'message.svg',
    description: 'SMS and messaging'
  },
  {
    id: 'map',
    name: 'Maps',
    category: 'navigation',
    baseShape: 'map.svg',
    description: 'GPS and navigation'
  },
  {
    id: 'settings',
    name: 'Settings',
    category: 'system',
    baseShape: 'settings.svg',
    description: 'System settings and configuration'
  },
  {
    id: 'gallery',
    name: 'Gallery',
    category: 'media',
    baseShape: 'gallery.svg',
    description: 'Photo gallery and albums'
  },
  {
    id: 'music',
    name: 'Music',
    category: 'media',
    baseShape: 'music.svg',
    description: 'Music player and library'
  },
  {
    id: 'weather',
    name: 'Weather',
    category: 'utility',
    baseShape: 'weather.svg',
    description: 'Weather forecast'
  },
  {
    id: 'wallet',
    name: 'Wallet',
    category: 'finance',
    baseShape: 'wallet.svg',
    description: 'Digital wallet and payments'
  },
  {
    id: 'house',
    name: 'Real Estate',
    category: 'real_estate',
    baseShape: 'house.svg',
    description: 'Property and real estate'
  },
  {
    id: 'shop',
    name: 'Store',
    category: 'commerce',
    baseShape: 'shop.svg',
    description: 'Shopping and marketplace'
  },
  {
    id: 'police',
    name: 'Police',
    category: 'services',
    baseShape: 'police.svg',
    description: 'Law enforcement services'
  },
  {
    id: 'hospital',
    name: 'EMS',
    category: 'services',
    baseShape: 'hospital.svg',
    description: 'Medical and emergency services'
  }
];

export const getIconById = (id: string): Icon | undefined => {
  return ICONS.find(icon => icon.id === id);
};

export const getIconsByCategory = (category: string): Icon[] => {
  if (category === 'all') return ICONS;
  return ICONS.filter(icon => icon.category === category);
};

export const getCategories = (): string[] => {
  const categories = new Set(ICONS.map(icon => icon.category));
  return ['all', ...Array.from(categories)];
};
