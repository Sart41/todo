import {createContext, useEffect, useMemo} from "react";
import {useSettings} from "@/entities/settings/model/useSettings";

export const SettingsContext = createContext({})

export const SettingsProvider = (props) => {
  const {
    children
  } = props

  const {
    settings,
    updateSettings
  } = useSettings();

  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  useEffect(() => {
    const currentTheme = settings.theme || defaultTheme

    document.documentElement.dataset.theme = currentTheme;
  }, [settings.theme]);

  const value = useMemo(() => ({
    settings,
    updateSettings,
  }), [
    settings,
    updateSettings,
  ])

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}