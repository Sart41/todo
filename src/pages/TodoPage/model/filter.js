export const filterTodos = (todos, filter) => {

  if (filter === 'all') return todos

  if (filter === 'active') { return todos.filter(todo => !todo.isCompleted) }

  if (filter === 'completed') return todos.filter(todo => todo.isCompleted)

  return todos
}