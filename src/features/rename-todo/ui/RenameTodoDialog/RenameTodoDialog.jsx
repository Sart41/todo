import styles from './RenameTodoDialog.module.scss'
import clsx from 'clsx'
import { TodoForm } from '@/shared/ui/todo-form'
import { useEffect } from 'react'

export const RenameTodoDialog = (props) => {

  const {
    initialTitle,
    onConfirm,
    onClose,
  } = props

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape")
        onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <dialog className={clsx(styles.root)}  open>
      <div className={clsx(styles.content)}>
        <h1 className={clsx(styles.title)}>Отредактируйте задачу</h1>
        <TodoForm
          className={styles.form}
          fieldId='edit-todo'
          initialTitle={initialTitle}
          fieldLabel=''
          buttonTitle='Подтвердить'

          onSubmitForm={(title) => {
            onConfirm(title)
            onClose()
          }
          }
        />
      </div>
    </dialog>
  )
}