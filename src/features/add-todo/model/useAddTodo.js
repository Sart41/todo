import {ActionsContext} from "@/entities/todo";
import {useContext, useState} from "react";
import {validateTodoTitle} from "@/shared/lib/validation/validateTodoTitle";

export const useAddTodo = (onSuccess) => {
  const {
    addTodo
  } = useContext(ActionsContext)


  const [title, setTitle] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = (event) => {
    event.preventDefault()

    const validationError = validateTodoTitle(title)
    if (validationError) {
      setError(validationError)
      return
    }

    addTodo(title.trim())
    setTitle('')
    onSuccess?.()
  }

  const handleChange = (event) => {
    if (error) setError(null)
    setTitle(event.target.value)
  }


  return {
    title,
    error,
    handleSubmit,
    handleChange,
  }
}