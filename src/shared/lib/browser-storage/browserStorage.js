export const browserStorage = {
  load: (key, defaultValue) => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : defaultValue
    } catch (error) {
      console.error(`Failed to load ${key} from storage`, error);
      return defaultValue
    }
  },

  save: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error(`Failed to save ${key} to storage`, e);
    }
  }
}