import {useCallback, useEffect, useMemo, useState} from "react";
import {browserStorage} from "@/shared/lib";
import {createTodo, toggleCompleted, updateTitle} from "../lib/todo";

const KEY = 'todos';

export const useTodos = () => {
  const [todos, setTodos] = useState(() => browserStorage.load(KEY, []));
  const [filter, setFilter] = useState('all')

  const totalCount = todos.length
  const completedCount = useMemo(() => {
      return todos.filter(({isCompleted}) => isCompleted).length
    }, [todos]
  )


  useEffect(() => {
    browserStorage.save(KEY, todos);
  }, [todos]);

  const addTodo = useCallback((title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    const normalizedTitle = title.replace(/\s+/g, ' ');
    setTodos(prev => [...prev, createTodo(normalizedTitle)]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter((t) => t.id !== id));
  }, []);

  const renameTodo = useCallback((id, newTitle) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? updateTitle(todo, newTitle) : todo
      )
    );
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? toggleCompleted(todo) : todo
      ));
  }, []);

  const clearTodos = useCallback(() => {
    setTodos([]);
  }, []);

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

  return {
    todos,
    filter,
    filteredTodos,
    totalCount,
    completedCount,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    renameTodo,
    setFilter,
  };
};