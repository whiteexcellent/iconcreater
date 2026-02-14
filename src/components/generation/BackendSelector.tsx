// src/components/generation/BackendSelector.tsx
// Backend selection dropdown

import { useState } from 'react';
import { Check, Cpu, Zap, Wifi, AlertCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Backend {
  id: string;
  name: string;
  size: number;
  requirements: string[];
}

interface BackendSelectorProps {
  backends: Backend[];
  activeBackend: string;
  onBackendChange: (backendId: string) => void;
  disabled?: boolean;
}

const backendIcons: Record<string, React.ReactNode> = {
  'webnn': <Zap className="h-4 w-4 text-yellow-400" />,
  'butterman': <Cpu className="h-4 w-4 text-orange-400" />,
  'transformers': <Wifi className="h-4 w-4 text-green-400" />,
  'svg': <AlertCircle className="h-4 w-4 text-blue-400" />
};

export function BackendSelector({ 
  backends, 
  activeBackend, 
  onBackendChange,
  disabled = false 
}: BackendSelectorProps) {
  const [isSwitching, setIsSwitching] = useState(false);

  const handleChange = async (value: string) => {
    if (value === activeBackend) return;
    
    setIsSwitching(true);
    await onBackendChange(value);
    setIsSwitching(false);
  };

  const activeBackendData = backends.find(b => b.name === activeBackend);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">
        AI Backend
      </label>
      
      <Select 
        value={activeBackendData?.id} 
        onValueChange={handleChange}
        disabled={disabled || isSwitching}
      >
        <SelectTrigger className="w-full bg-slate-800/50 border-slate-700 text-slate-200">
          <SelectValue placeholder="Select backend..." />
        </SelectTrigger>
        
        <SelectContent className="bg-slate-800 border-slate-700">
          {backends.map((backend) => (
            <SelectItem 
              key={backend.id} 
              value={backend.id}
              className="text-slate-200 focus:bg-slate-700 focus:text-slate-100"
            >
              <div className="flex items-center gap-3">
                {backendIcons[backend.id] || <Cpu className="h-4 w-4" />}
                
                <div className="flex flex-col">
                  <span className="font-medium">{backend.name}</span>
                  <span className="text-xs text-slate-400">
                    {backend.size > 0 ? `${backend.size}MB` : 'Instant'} • {backend.requirements.join(', ')}
                  </span>
                </div>
                
                {backend.name === activeBackend && (
                  <Check className="h-4 w-4 text-green-400 ml-auto" />
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {isSwitching && (
        <p className="text-xs text-slate-400">
          Switching backend, please wait...
        </p>
      )}
    </div>
  );
}
