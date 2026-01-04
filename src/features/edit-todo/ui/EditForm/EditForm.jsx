import {useEffect, useRef, useState} from "react";
import {useClickOutside} from "@/shared/lib/hooks/useClickOutside";
import {TodoFormUI} from "@/shared/ui/todo-form";
import {Button} from '@/shared/ui/Button'
import {GiCancel} from "react-icons/gi";
import {TfiSave} from "react-icons/tfi";

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
    <TodoFormUI
      fieldId={`edit-todo-${initialTitle}`}
      value={title}
      formRef={formRef}
      inputRef={inputRef}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      error={error}

      actions={
        <>
          <Button data-icon-only='true'>
            <GiCancel
              size={24}
              color="red"
              aria-label='Отменить'
              onClick={onCancel}
            />
          </Button>

          <Button data-icon-only='true'>
            <TfiSave
              size={24}
              color='blue'
              aria-label='Сохранить'
              type='submit'
              onClick={handleSubmit}
            />
          </Button>
        </>
      }
    />
  )
}