import {useCallback, useEffect, useState} from "react";
import {browserStorage} from "@/shared/lib";
import {getDefaultSettings} from "@/entities/settings";


const KEY = 'settings'

export const useSettings = () => {
  const [settings, setSettings] = useState(() => browserStorage.load(KEY, getDefaultSettings()))

  useEffect(() => {
    browserStorage.save(KEY, settings)
  }, [settings])


  const updateSettings = useCallback((id, value) => {
    setSettings((prev) => (
      {
        ...prev,
        [id]: value,
      }
    ))
  }, [])


  return {
    settings,
    setSettings,
    updateSettings
  }
}
