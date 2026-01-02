import {memo, useState} from "react";
import clsx from "clsx"
import styles from "./TodoItem.module.scss"
import {EditForm} from "@/features/edit-todo";

export const TodoItem = memo((props) => {
  const {
    className,
    isCompleted,
    title,
    onSafe,
    statusSlot,
    actionsSlot,
  } = props

  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing(true)
  }
  const cancelEdit = () => {
    setIsEditing(false)
  }

  const handleSubmit = (newTitle) => {
    cancelEdit()
    onSafe(newTitle)
  }
  return (
    <div
      className={clsx(styles.root, {[styles.checked]: isCompleted}, className)}
    >
      {statusSlot}

      {isEditing
        ? (<EditForm
            initialTitle={title}
            onCancel={cancelEdit}
            onSubmit={handleSubmit}
          />
        ) : <p className={styles.title}>{title}</p>}


      <div className={styles.actions}>
        {!isEditing && actionsSlot({onEdit: toggleEdit, isEditing})}
      </div>

    </div>
  )
})