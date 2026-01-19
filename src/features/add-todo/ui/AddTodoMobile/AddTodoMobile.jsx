import {useState} from "react";
import {useAddTodo} from './../../model/useAddTodo'
import {Button} from "@/shared/ui/Button";
import {Modal} from "@/shared/ui/modal";
import {BaseForm} from "@/shared/ui/BaseForm";

import styles from './AddTodoMobile.module.scss'

export const AddTodoMobile = () => {
  const [isOpen, setIsOpen] = useState('')

  const {
    title,
    error,
    handleSubmit,
    handleChange
  } = useAddTodo(() => setIsOpen(false));

  return (
    <>
      <Button
        className={styles.fab}
        aria-label="Добавить задачу"
        onClick={() => setIsOpen(true)}
      >
        +
      </Button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title='Добавление задачи'
        >
          <BaseForm
            fieldId="mobile-add-todo"
            value={title}
            error={error}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={() => setIsOpen(false)}
            actions={
              <Button
                type="submit"
                variant='primary'
              >Добавить</Button>}
          />
        </Modal>
      )}
    </>
  )
}