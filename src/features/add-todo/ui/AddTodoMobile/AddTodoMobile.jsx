import {useState} from "react";
import {useAddTodo} from './../../model/useAddTodo'
import {Button} from "@/shared/ui/Button";
import {Modal} from "@/shared/ui/modal";
import {TodoFormUI} from "@/shared/ui/todo-form";

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
      {/* Большая кнопка под палец */}
      <Button
        variant="fab" // Например, Floating Action Button
        className={styles.fab}
        onClick={() => setIsOpen(true)}
      >
        +
      </Button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <TodoFormUI
            fieldId="mobile-add-todo"
            value={title}
            error={error}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={() => setIsOpen(false)}
            actions={<Button type="submit">Добавить</Button>}
          />
        </Modal>
      )}
    </>
  )
}