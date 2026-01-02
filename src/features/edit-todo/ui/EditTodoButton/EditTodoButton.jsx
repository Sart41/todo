import {useState} from 'react'
import clsx from 'clsx'
import {Button} from '@/shared/ui/Button'
import {EditIcon} from '@/shared/ui/icons'
import {RenameTodoDialog} from '@/features/edit-todo'
import {Modal} from '@/shared/ui/modal'

import styles from './EditTodoButton.module.scss'

export const EditTodoButton = (props) => {

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
      </Button>


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