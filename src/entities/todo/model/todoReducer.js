import {createTodo, toggleCompleted, updateTitle} from "@/entities/todo";

export const TODO_ACTIONS = {
  ADD: 'ADD',
  RENAME: 'RENAME',
  DELETE: 'DELETE',
  TOGGLE: 'TOGGLE',
  CLEAR: 'CLEAR'
}

export const todosReducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD: {
      return [...state, createTodo(action.title)];
    }
    case TODO_ACTIONS.DELETE: {
      return state.filter((todo) => todo.id !== action.id)
    }
    case TODO_ACTIONS.RENAME: {
      return state.map((todo) => todo.id === action.id ? updateTitle(todo, action.newTitle) : todo)
    }
    case TODO_ACTIONS.TOGGLE: {
      return state.map((todo) => (todo.id === action.id) ? toggleCompleted(todo) : todo)
    }
    case TODO_ACTIONS.CLEAR: {
      return []
    }
    default: {
      return state
    }
  }
}