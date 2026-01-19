import {useContext, useState} from "react";
import {ActionsContext} from "@/entities/todo";
import {validateTodoTitle} from "@/shared/lib/validation/validateTodoTitle";

export const useEditTodo = (props) => {
  const {todoId, initialTitle, onSubmit, onCancel} = props

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
    if (typeof onSubmit === 'function') onSubmit()
  }

  const handleCancel = () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle && trimmedTitle !== initialTitle) {
      handleSubmit()
    } else onCancel?.()
  }

  const handleChange = (event) => {
    if (error) setError(null)
    setTitle(event.target.value);
  }

  return {
    title,
    error,
    handleSubmit, handleCancel, handleChange
  }
}