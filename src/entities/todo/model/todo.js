export const createTodo = (title) => ({
  id: crypto?.randomUUID?.() ?? Date.now().toString(),
  title,
  isCompleted: false,
})


export const toggleCompleted = (todo) => ({ ...todo, isCompleted: !todo.isCompleted })

export const updateTitle = (todo, title) => ({
  ...todo,
  title,
})
