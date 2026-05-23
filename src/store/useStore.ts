import { create } from 'zustand'
import type { Stats } from '../types'

export type Theme = 'blue' | 'dark'

interface AppState {
  stats: Stats
  isMenuOpen: boolean
  theme: Theme
  toggleMenu: () => void
  setStats: (stats: Stats) => void
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const defaultStats: Stats = {
  users: 15234,
  platforms: 48,
  guides: 156,
  reviews: 892,
}

export const useStore = create<AppState>((set) => ({
  stats: defaultStats,
  isMenuOpen: false,
  theme: (localStorage.getItem('theme') as Theme) || 'blue',
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setStats: (stats) => set({ stats }),
  setTheme: (theme) => {
    localStorage.setItem('theme', theme)
    set({ theme })
  },
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'blue' ? 'dark' : 'blue'
    localStorage.setItem('theme', newTheme)
    return { theme: newTheme }
  }),
}))