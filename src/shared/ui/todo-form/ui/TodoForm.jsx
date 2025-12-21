import { useState } from "react";
import clsx from "clsx";
import styles from './TodoForm.module.scss'
import { Field } from '@/shared/ui/Field'
import { Button } from '@/shared/ui/Button'

export const TodoForm = (props) => {
  const {
    className,
    fieldId = 'todo title',
    fieldLabel = 'Новая задача',
    initialTitle = '',
    buttonTitle,
    onSubmitForm,
  } = props

  const [title, setTitle] = useState(initialTitle)

  const onSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      setTitle('')
      return
    }

    onSubmitForm(trimmedTitle)
    setTitle('')
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className={clsx(styles.root, className)}
      >
        <Field
          className={className}
          id={fieldId}
          label={fieldLabel}
          value={title}
          onInput={({ target }) => setTitle(target.value)}
        />

        <Button 
        type='submit'
        className = {clsx(styles.button)}
        >
          {buttonTitle}
        </Button>
      </form>
    </>
  )
}