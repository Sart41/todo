import {Button} from "@/shared/ui/Button"
import {useContext, useState} from "react";
import {ActionsContext} from "@/entities/todo";
import {Modal} from "@/shared/ui/modal";
import {ConfirmAction} from "@/shared/ui/ConfirmAction";


export const ClearTodos = (props) => {
  const {
    className,
  } = props

  const {clearTodos, setFilter} = useContext(ActionsContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const CONFIRM_MESSAGE = 'Удалить все задачи в списке? Это действие необратимо'

  return (
    <>
      <Button
        aria-label="Очистить список"
        onClick={() => setIsModalOpen(true)}
      >
        Удалить все
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ConfirmAction
          onClick={(e) => e.stopPropagation()}
          message={CONFIRM_MESSAGE}
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => {
            setIsModalOpen(false)
            clearTodos()
            setFilter('all')
          }}
        >

        </ConfirmAction>
      </Modal>
    </>

  )

}