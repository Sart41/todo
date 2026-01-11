import {createContext, useMemo} from "react";
import {useTodos} from "@/entities/todo";

export const DataContext = createContext(null)
export const ActionsContext = createContext(null)

export const TodoProvider = (props) => {
  const {
    children
  } = props

  const {
    todos,
    filteredTodos,
    filter,
    totalCount,
    completedCount,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    renameTodo,
    setFilter,
  } = useTodos()

  const data = useMemo(() => ({
    totalCount,
    completedCount,
    filter,
    filteredTodos,

  }), [
    totalCount,
    completedCount,
    filter,
    filteredTodos,
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
