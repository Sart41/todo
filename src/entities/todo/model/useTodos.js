import {useCallback, useEffect, useMemo, useReducer, useState} from "react";
import {browserStorage} from "@/shared/lib";
import {TODO_ACTIONS, todosReducer} from "@/entities/todo/model/todoReducer";
import {normalizeTitle} from "@/entities/todo/model/todoUtils";

const STORAGE_KEY = 'todos';


export const useTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, browserStorage.load(STORAGE_KEY, []));
  const [filter, setFilter] = useState('all')

  const stats = useMemo(() => {
    let completed = 0

    for (const todo of todos) {
      if (todo.isCompleted) completed++
    }

    return {
      total: todos.length,
      completed,
      active: todos.length - completed
    }
  }, [todos])

  const filteredTodos = useMemo(() => {

    switch (filter) {
      case 'completed':
        return todos.filter(({isCompleted}) => isCompleted)
      case 'active':
        return todos.filter(({isCompleted}) => !isCompleted)
      default:
        return todos
    }
  }, [todos, filter]);

  useEffect(() => {
    browserStorage.save(STORAGE_KEY, todos);
  }, [todos]);

  const addTodo = useCallback((title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    dispatch({
      type: TODO_ACTIONS.ADD,
      title: normalizeTitle(title)
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({
      type: TODO_ACTIONS.DELETE,
      id
    })
  }, []);

  const renameTodo = useCallback((id, newTitle) => {
    dispatch({
      type: TODO_ACTIONS.RENAME,
      id,
      newTitle: normalizeTitle(newTitle)
    })
  }, []);

  const toggleTodo = useCallback((id) => {
    dispatch({
      type: TODO_ACTIONS.TOGGLE,
      id
    })
  }, []);

  const clearTodos = useCallback(() => {
    dispatch({type: TODO_ACTIONS.CLEAR})
  }, []);


  return {
    todos: filteredTodos,
    filter,
    stats,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    renameTodo,
    setFilter,
  };
};