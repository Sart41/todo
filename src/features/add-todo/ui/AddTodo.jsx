import styles from './AddTodo.module.scss'
import { TodoFormUI } from '@/shared/ui/todo-form'
import clsx from 'clsx'
import { useState } from 'react'

export const AddTodo = (props) => {
  const {
    onAddTodo
  } = props


  const [title, setTitle] = useState('')
  const [error, setError] = useState(null)
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      setError(`Название задачи не может быть пустым`)
      return
    }

    onAddTodo(trimmedTitle)
    setTitle('')
  }

  const handleChange = (newTitle) => {
    if (error) setError(null)
    setTitle(newTitle)
  }

  return (
    <div className={clsx(styles.root)}>

      <TodoFormUI
        error={error}
        className={clsx(styles.form)}
        value={title}
        fieldId='new-todo'
        fieldLabel='Новая задача'
        buttonTitle='Добавить'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}