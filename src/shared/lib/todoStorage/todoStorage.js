export const todoStorage = {
  load: () => {
    try {
      const raw = localStorage.getItem('todos')
      return raw ? JSON.parse(raw) : []
    } catch (error) {
      console.error('Failed to load todos from storage', error);
      return []
    }
  },

  save: (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}