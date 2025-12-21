import { useEffect, useState } from 'react'
import clsx from 'clsx'
import styles from "./TodosPage.module.scss"
import { TodoList } from '@/widgets/todo-list'
import { TodoForm } from '@/shared/ui/todo-form'
import { TodoInfo } from '@/widgets/todo-info'
import { createTodo, toggleCompleted, updateTitle } from '@/entities/todo'
import { todoStorage } from '@/shared/lib'
import { TodoFilter } from '@/widgets/todo-filter'
import {filterTodos} from '@/pages/TodoPage' 


export const TodosPage = () => {

  const [todos, setTodos] = useState(() => todoStorage.load())
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    todoStorage.save(todos), [todos]
  })

  const total = todos.length
  const completed = todos.filter(({ isCompleted }) => isCompleted).length

  const filteredTodos = filterTodos(todos, filter)

  const addTodo = (title) => {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return
    setTodos([...todos, createTodo(trimmedTitle)])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const renameTodo = (id, newTitle) => {
    setTodos((todos) =>
      todos.map(todo =>
        todo.id === id
          ? updateTitle(todo, newTitle)
          : todo
      )
    )
  }

  const toggleTodo = (id) => {
    setTodos((todos) =>
      todos.map(todo =>
        todo.id === id
          ? toggleCompleted(todo)
          : todo
      ))
  }

  const clearTodos = () => {
    setTodos([])
  }


  return (
    <div className={clsx(styles.page)}>
      <div className={clsx('container',styles.todo)}>
        <h1 className={clsx(styles.title)} >hello</h1>
        <div className={clsx(styles.content)}>


          <TodoForm
            fieldId='new-todo'
            buttonTitle='Добавить'
            onSubmitForm={addTodo}
          />

          {total > 0 && <TodoFilter setFilter = {setFilter}/>}

          {total > 0 && <TodoInfo
            total={total}
            completed={completed}
            onClearTodos={clearTodos}
          />}

          <TodoList
            todos={filteredTodos}
            total={total}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            renameTodo={renameTodo}
          />


          {total === 0 && <div className={clsx(styles.alarm)}>
            Cписок задач пуст, начните добавлять задачи, и они здесь появятся!</div>}
        </div>
      </div>
    </div>
  )
}

