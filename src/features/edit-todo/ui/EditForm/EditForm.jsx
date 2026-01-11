import {useContext, useState} from "react";
import {TodoFormUI} from "@/shared/ui/todo-form";
import {Button} from '@/shared/ui/Button'
import {GiCancel} from "react-icons/gi";
import {TfiSave} from "react-icons/tfi";
import {ActionsContext} from "@/entities/todo";
import {validateTodoTitle} from "@/shared/lib/validation/validateTodoTitle";

export const EditForm = (props) => {

  const {
    todoId,
    initialTitle = "",
    onSubmit,
    onCancel
  } = props;

  const {renameTodo} = useContext(ActionsContext);

  const [title, setTitle] = useState(initialTitle);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event?.preventDefault()
    const validationErrors = validateTodoTitle(title)
    if (validationErrors) {
      setError(validationErrors)
      return
    }
    renameTodo(todoId, title.trim())
    onSubmit?.()
  }

  const handleChange = (event) => {
    if (error) setError(null)
    setTitle(event.target.value);
  }

  const handleCancel = () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle && trimmedTitle !== initialTitle) {
      handleSubmit()
    } else onCancel?.()
  }

  return (
    <TodoFormUI
      fieldId={`edit-todo-${todoId}`}
      value={title}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      error={error}

      actions={
        <>
          <Button
            aria-label='Отменить'
            iconOnly
            onClick={onCancel}
          >
            <GiCancel
              size={24}
              color='var(--status-error)'
            />
          </Button>

          <Button
            aria-label='Сохранить'
            type='submit'
            iconOnly
          >
            <TfiSave
              size={24}
              color='var(--accent)'
            />
          </Button>
        </>
      }
    />
  )
}