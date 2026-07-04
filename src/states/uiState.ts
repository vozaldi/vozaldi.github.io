import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import type { LayoutObject } from "../types/utilities";
import { createJSONStorage, persist } from "zustand/middleware";
import { getConfig } from "src/lib/config";

export type RootUIState = {
  theme: 'light' | 'dark';
  redirect: string | null;
  menuOpen: boolean;
  layouts: LayoutObject & {
    bottomTabs?: LayoutObject['bottomTabs'];
    body?: LayoutObject['body'];
    container?: LayoutObject['container'];
    header?: LayoutObject['header'];
  };
  setting: Record<string, any> & {
    public_ingredient_ids?: number[];
    public_olahan_ids?: number[];
  };
};

export type UIStateMiddleware = [
  ['zustand/persist', {
    theme: RootUIState['theme'];
    redirect: RootUIState['redirect'];
  }],
];

export const useUiState = create<RootUIState, UIStateMiddleware>(
  persist(
    (set, get) => ({
      theme: 'dark',
      redirect: null,
      menuOpen: false,
      layouts: {},
      setting: {},

      // Actions
      setTheme: (theme: 'light' | 'dark') => set((state) => ({ ...state, theme })),
      setMenuOpen: (open: boolean) => set((state) => ({ ...state, menuOpen: open })),
      setLayouts: (layouts: LayoutObject) => set((state) => ({
        ...state,
        layouts: {
          ...state.layouts,
          ...layouts,
        },
      })),
    }),
    {
      name: `${getConfig("STORAGE_KEY")}-ui`,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        redirect: state.redirect,
      }),
    },
  )
);

export function useUiShallow<U>(selector: (state: RootUIState) => U): U {
  return useUiState(useShallow(selector));
};
