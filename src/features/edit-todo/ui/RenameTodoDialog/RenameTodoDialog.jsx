import styles from './RenameTodoDialog.module.scss'
import clsx from 'clsx'
import { TodoFormUI } from '@/shared/ui/todo-form'
import { useState } from 'react'

export const RenameTodoDialog = (props) => {

  const {
    initialTitle,
    onConfirm,
  } = props

  const [title, setTitle] = useState(initialTitle)
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      setError('Задача не может быть пустой');
      return
    }

    onConfirm(trimmedTitle)
  }

  const handleChange = (newTitle) => {
    if (error) setError(null);
    setTitle(newTitle);
  }

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.content)}>
        <h1 className={clsx(styles.title)}>Отредактируйте задачу</h1>

        <TodoFormUI
          error={error}
          className={styles.form}
          fieldId='edit-todo'
          value={title}
          fieldLabel=''
          buttonTitle='Подтвердить'
          autoFocus={true}

          onChange={handleChange}
          onSubmit={handleSubmit}
        />

      </div>
    </div>
  )
}