import clsx from "clsx"
import {useContext} from "react";
import {Button} from "@/shared/ui/Button"
import {DeleteIcon} from "@/shared/ui/icons"
import {ActionsContext} from "@/entities/todo";

import styles from './DeleteTodo.module.scss'

export const DeleteTodo = ({id}) => {

  const {deleteTodo} = useContext(ActionsContext)

  return (
    <Button
      className={clsx(styles.root)}
      iconOnly
      aria-label="Удалить задачу"
      onClick={() => {
        deleteTodo(id)
      }}
    >
      <DeleteIcon size={24} />
    </Button>
  )
}