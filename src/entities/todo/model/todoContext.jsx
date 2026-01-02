import {createContext, useMemo, useRef} from "react";
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


  const newTodoInputRef = useRef(null)


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
    newTodoInputRef,
  }), [
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    renameTodo,
    setFilter,
    newTodoInputRef,
  ])

  return (
    <DataContext.Provider value={data}>
      <ActionsContext.Provider value={allActions}>
        {children}
      </ActionsContext.Provider>
    </DataContext.Provider>
  )
}
