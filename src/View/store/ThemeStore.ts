import { create } from "zustand";

interface State {
  theme: 'dark' | 'light'
  setTheme(value: 'dark' | 'light'): void
}

export const useThemeStore = create<State>((set, get) => ({
  theme: 'light',
  setTheme(value) { set({ theme: value }) },
}))