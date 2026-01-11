import {memo, useContext, useState} from "react";
import clsx from "clsx"
import {Modal} from "@/shared/ui/modal";
import {EditForm} from "@/features/edit-todo";
import {SettingsContext} from "@/entities/settings";
import {useEditTodo} from "@/features/edit-todo/model/useEditTodo";

import styles from "./TodoItem.module.scss"

export const TodoItem = memo((props) => {
  const {
    className,
    todo,
    statusSlot,
    actionsSlot,
  } = props

  const {
    startEdit,
    saveEdit
  } = useEditTodo()

  const {settings} = useContext(SettingsContext)
  const [isEditing, setIsEditing] = useState(false)


  const toggleEdit = () => {
    // startEdit(todo.title)
    setIsEditing(true)
  }

  const cancelEdit = () => {
    setIsEditing(false)
  }

  return (
    <div
      className={clsx(styles.root, {[styles.checked]: todo.isCompleted}, className)}
    >
      {!isEditing &&
        (<div className={styles.status}>
          {statusSlot}
        </div>)
      }

      {isEditing && settings.editMode === 'inline' ? (<EditForm
        todoId={todo.id}
        initialTitle={todo.title}
        onCancel={cancelEdit}
        onSubmit={cancelEdit}
      />) : (<p className={styles.title}>{todo.title}</p>)
      }

      {settings.editMode === 'modal' && (
        <Modal
          isOpen={isEditing}
          onClose={cancelEdit}
          title="Правка задачи"
        >
          <EditForm
            todoId={todo.id}
            initialTitle={todo.title}
            onCancel={cancelEdit}
            onSubmit={cancelEdit}
          />
        </Modal>)
      }

      {(!isEditing || settings.editMode === 'modal') && (
        <div className={styles.actions}>
          {actionsSlot({onEdit: toggleEdit, isEditing})}
        </div>
      )
      }
    </div>
  )
})