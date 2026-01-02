import {TodoFormUI} from '@/shared/ui/todo-form'
import clsx from 'clsx'
import {memo, useContext, useState} from 'react'
import {ActionsContext} from "@/entities/todo";

import styles from './AddTodo.module.scss'

export const AddTodo = memo((props) => {

  const {
    addTodo, newTodoInputRef
  } = useContext(ActionsContext)


  const [title, setTitle] = useState('')
  const [error, setError] = useState(null)
  const isEmptyTitle = title.trim().length === 0

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      newTodoInputRef.current.focus();
      setError(`Название задачи не может быть пустым`)
      return
    }

    addTodo(trimmedTitle)
    setTitle('')
  }

  const handleChange = (event) => {
    if (error) setError(null)
    setTitle(event.target.value)
  }

  return (
    <div className={clsx(styles.root)}>

      <TodoFormUI
        error={error}
        disabled={isEmptyTitle}
        className={clsx(styles.form)}
        value={title}
        fieldId='new-todo'
        fieldLabel='Новая задача'
        buttonTitle='Добавить'
        onChange={handleChange}
        onSubmit={handleSubmit}
        newTodoInputRef={newTodoInputRef}
      />
    </div>
  )
})