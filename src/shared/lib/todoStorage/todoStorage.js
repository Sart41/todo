export const todoStorage = {
  load: () => {
    try {
      const raw = localStorage.getItem('todos')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  },

  save: (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}