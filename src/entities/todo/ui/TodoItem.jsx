import {memo, useState} from "react";
import clsx from "clsx"
import styles from "./TodoItem.module.scss"
import {Modal} from "@/shared/ui/modal";
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

      {/*{isEditing*/}
      {/*  ? (<EditForm*/}
      {/*      initialTitle={title}*/}
      {/*      onCancel={cancelEdit}*/}
      {/*      onSubmit={handleSubmit}*/}
      {/*    />*/}
      {/*  ) : <p className={styles.title}>{title}</p>}*/}


      <Modal
        isOpen={isEditing}
        onClose={cancelEdit}
        title="Правка задачи"
      >
        <EditForm
          onCancel={cancelEdit}
          onSubmit={handleSubmit}
          initialTitle={title}
        />
      </Modal>


      <p className={styles.title}>{title}</p>

      {isEditing
        ? null
        : (
          <div className={styles.actions}>
            {actionsSlot({onEdit: toggleEdit, isEditing})}
          </div>
        )
      }
    </div>
  )
})