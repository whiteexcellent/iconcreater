"use client";

import { useState, useMemo } from 'react';
import { useGeneratorStore } from '@/stores/generator-store';
import { ICONS, getCategories } from '@/data/icons';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

export function IconSelector() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const { selectedIcon, setSelectedIcon } = useGeneratorStore();
  
  const categories = useMemo(() => getCategories(), []);
  
  const filteredIcons = useMemo(() => {
    return ICONS.filter((icon) => {
      const matchesCategory = activeCategory === 'all' || icon.category === activeCategory;
      const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           icon.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getIconEmoji = (iconId: string) => {
    const emojiMap: Record<string, string> = {
      camera: '📷',
      bank: '🏦',
      car: '🚗',
      phone: '📱',
      message: '💬',
      map: '🗺️',
      settings: '⚙️',
      gallery: '🖼️',
      music: '🎵',
      weather: '🌤️',
      wallet: '👛',
      house: '🏠',
      shop: '🏪',
      police: '👮',
      hospital: '🏥'
    };
    return emojiMap[iconId] || '📱';
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors',
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-[300px] overflow-y-auto pr-2">
        {filteredIcons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => setSelectedIcon(icon)}
            className={cn(
              'flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200',
              selectedIcon?.id === icon.id
                ? 'border-primary bg-primary/10 ring-2 ring-primary ring-offset-2 ring-offset-background'
                : 'border-border bg-card hover:border-primary/50 hover:bg-accent'
            )}
          >
            <span className="text-2xl">{getIconEmoji(icon.id)}</span>
            <span className="text-xs font-medium text-center truncate w-full">
              {icon.name}
            </span>
          </button>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No icons found matching your search
        </div>
      )}
    </div>
  );
}
