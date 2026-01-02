import {Button} from "@/shared/ui/Button";
import {TfiSave} from "react-icons/tfi";
import clsx from "clsx";
import {Field} from "@/shared/ui/Field";
import {useEffect, useRef, useState} from "react";
import styles from './EditForm.module.scss'
import {useClickOutside} from "@/shared/lib/hooks/useClickOutside";
import {GiCancel} from "react-icons/gi";

export const EditForm = (props) => {

  const {
    initialTitle = "",
    onSubmit,
    onCancel
  } = props;

  const [title, setTitle] = useState(initialTitle);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedTitle = (title || '').trim()
    if (!trimmedTitle) {
      setTitle("")
      setError('Задача не может быть пустой')
      inputRef.current?.focus()
      return
    }
    onSubmit(trimmedTitle)
  }

  const handleChange = (event) => {
    if (error) setError(null)
    setTitle(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onCancel()
    }
  }
  useClickOutside(formRef, () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle && trimmedTitle !== initialTitle) {
      onSubmit(trimmedTitle)
    } else onCancel()
  })

  return (
    <form
      ref={formRef}
      className={clsx(styles.root)}
      onSubmit={handleSubmit}
    >

      <Field
        id="edit"
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        error={error}
      />

      <div className={styles.actions}>
        <Button
          type='button'
          data-icon-only='true'
          onClick={onCancel}
          aria-label='Отменить'
        >
          <GiCancel
            size={24}
            color="red"
          />
        </Button>

        <Button
          type="submit"
          data-icon-only='true'
          aria-label='Сохранить'
        >
          <TfiSave
            size={24}
            color="#3b82f6"
          />
        </Button>

      </div>

    </form>
  )
}