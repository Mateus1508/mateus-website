import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Theme = 'dark' | 'light'
export type Locale = 'pt' | 'en'

type Preferences = {
  theme: Theme
  locale: Locale
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  setLocale: (locale: Locale) => void
}

const PreferencesContext = createContext<Preferences | null>(null)

const STORAGE_KEY = 'mateus:preferences:v2'

function readStored(): Partial<Pick<Preferences, 'theme' | 'locale'>> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object') return {}
    const obj = parsed as Record<string, unknown>
    const theme = obj.theme === 'light' || obj.theme === 'dark' ? obj.theme : undefined
    const locale = obj.locale === 'pt' || obj.locale === 'en' ? obj.locale : undefined
    return { theme, locale }
  } catch {
    return {}
  }
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const stored = useMemo(() => (typeof window === 'undefined' ? {} : readStored()), [])
  const [theme, setTheme] = useState<Theme>(stored.theme ?? 'dark')
  const [locale, setLocale] = useState<Locale>(stored.locale ?? 'en')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, locale }))
    } catch {
      // ignore
    }
  }, [theme, locale])

  const value = useMemo<Preferences>(
    () => ({
      theme,
      locale,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
      setLocale,
    }),
    [theme, locale],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider')
  return ctx
}

