import clsx from "clsx"
import {memo, useContext, useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {EditForm} from "@/features/edit-todo";
import {SettingsContexts} from "@/entities/settings";
import {MobileDropdown} from "@/shared/ui/mobile-dropdown/MobileDropdown";

import styles from "./TodoItem.module.scss"

export const TodoItem = memo((props) => {
  const {
    className,
    todo,
    statusSlot,
    actionsSlot,
  } = props

  const {settings} = useContext(SettingsContexts)
  const [isEditing, setIsEditing] = useState(false)


  const toggleEdit = () => {
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
          <div className={styles.actionsDesktop}>
            {actionsSlot({onEdit: toggleEdit, isEditing})}
          </div>

          <div className={styles.actionsMobile}>
            <MobileDropdown>
              {actionsSlot({onEdit: toggleEdit, isEditing})}
            </MobileDropdown>
          </div>

        </div>)
      }
    </div>
  )
})