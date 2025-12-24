
import { useState } from 'react'
import styles from './RenameTodoButton.module.scss'
import clsx from 'clsx'
import { Button } from '@/shared/ui/Button'
import { EditIcon } from '@/shared/ui/icons'
import { RenameTodoDialog } from '@/features/rename-todo'
import { Modal } from '@/shared/ui/modal'

export const RenameTodoButton = (props) => {

  const {
    id,
    onRename,
    initialTitle = 'hi'
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)


  const handleConfirm = (title) => {
    onRename(id, title)
    onClose()
  }


  return (
    <>
      <Button
        className={clsx(styles.root)}
        iconOnly
        onClick={() => setIsOpen(true)}
        aria-label='Изменить задачу'
      >
        <EditIcon size={24} />
      </Button >


      {isOpen && (
        <Modal
          onClose={onClose}
        >
          <RenameTodoDialog
            initialTitle={initialTitle}
            onConfirm={handleConfirm}
            onClose={onClose}
          />
        </Modal>
      )
      }
    </>
  )
}