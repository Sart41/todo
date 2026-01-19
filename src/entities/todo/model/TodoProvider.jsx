import {useMemo} from "react";
import {ActionsContext, DataContext, useTodos} from "@/entities/todo";

export const TodoProvider = (props) => {
  const {
    children
  } = props

  const {
    todos,
    filter,
    stats,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    renameTodo,
    setFilter,
  } = useTodos()

  const data = useMemo(() => ({
    todos,
    stats,
    filter,

  }), [
    todos,
    stats,
    filter,
  ])

  const allActions = useMemo(() => ({
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    renameTodo,
    setFilter,
  }), [
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    renameTodo,
    setFilter,
  ])

  return (
    <DataContext.Provider value={data}>
      <ActionsContext.Provider value={allActions}>
        {children}
      </ActionsContext.Provider>
    </DataContext.Provider>
  )
}
