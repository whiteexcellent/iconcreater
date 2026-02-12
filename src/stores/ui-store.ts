import { create } from 'zustand';

interface UIState {
  // Theme
  darkMode: boolean;
  
  // Sidebar/Panels
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  
  // Modals
  activeModal: string | null;
  modalData: unknown;
  
  // Toast Notifications
  toasts: Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
  }>;
  
  // Actions
  toggleDarkMode: () => void;
  toggleLeftPanel: () => void;
  toggleRightPanel: () => void;
  
  openModal: (modal: string, data?: unknown) => void;
  closeModal: () => void;
  
  addToast: (message: string, type: UIState['toasts'][0]['type'], duration?: number) => void;
  removeToast: (id: string) => void;
  
  // Batch selection for bulk operations
  batchSelection: Set<string>;
  toggleBatchItem: (id: string) => void;
  clearBatchSelection: () => void;
  isBatchMode: boolean;
  setBatchMode: (active: boolean) => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  darkMode: true,
  isLeftPanelOpen: true,
  isRightPanelOpen: true,
  activeModal: null,
  modalData: null,
  toasts: [],
  batchSelection: new Set(),
  isBatchMode: false,
  
  toggleDarkMode: () => {
    set((state) => ({ darkMode: !state.darkMode }));
  },
  
  toggleLeftPanel: () => {
    set((state) => ({ isLeftPanelOpen: !state.isLeftPanelOpen }));
  },
  
  toggleRightPanel: () => {
    set((state) => ({ isRightPanelOpen: !state.isRightPanelOpen }));
  },
  
  openModal: (modal, data) => {
    set({ activeModal: modal, modalData: data });
  },
  
  closeModal: () => {
    set({ activeModal: null, modalData: null });
  },
  
  addToast: (message, type, duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { id, message, type, duration }]
    }));
    
    // Auto remove
    setTimeout(() => {
      get().removeToast(id);
    }, duration);
  },
  
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    }));
  },
  
  toggleBatchItem: (id) => {
    set((state) => {
      const newSet = new Set(state.batchSelection);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return { batchSelection: newSet };
    });
  },
  
  clearBatchSelection: () => {
    set({ batchSelection: new Set() });
  },
  
  setBatchMode: (active) => {
    set({ isBatchMode: active });
    if (!active) {
      set({ batchSelection: new Set() });
    }
  }
}));
