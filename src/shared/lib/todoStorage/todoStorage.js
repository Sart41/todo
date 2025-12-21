export const todoStorage = {
  load: () => {
    const raw = localStorage.getItem('todos')
    return raw ? JSON.parse(raw) : []
  },

  save: (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}