export const createTodo = (title) => ({
  id: crypto?.randomUUID?.() ?? Date.now().toString(),
  title,
  isCompleted: false,
  createdAt: new Date().toISOString()
});

export const updateTitle = (todo, newTitle) => ({
  ...todo,
  title: newTitle
});

export const toggleCompleted = (todo) => ({
  ...todo,
  isCompleted: !todo.isCompleted
});