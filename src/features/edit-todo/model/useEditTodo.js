import {useContext, useState} from "react";
import {ActionsContext} from "@/entities/todo";

export const useEditTodo = (todoId) => {
  const {renameTodo} = useContext(ActionsContext)
  const [isEditing, setIsEditing] = useState(false)
  const [tempTitle, setTempTitle] = useState('')


  const startEdit = (initialTilte) => {
    setTempTitle(initialTilte);
    setIsEditing(true)
  }

  const saveEdit = (newTitle) => {
    if (newTitle.trim()) {
      renameTodo(todoId, newTitle.trim());
    }
    cancelEdit();
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setTempTitle('')
  }

  return {isEditing, tempTitle, cancelEdit, startEdit, saveEdit}
}