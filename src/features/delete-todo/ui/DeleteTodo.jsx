import styles from './DeleteTodo.module.scss'
import clsx from "clsx"
import { Button } from "@/shared/ui/Button"
import { DeleteIcon } from "@/shared/ui/icons"


export const DeleteTodo = (props) => {

  const {
    onDelete
  } = props

  return (
    <Button
      className={clsx(styles.root)}
      iconOnly
      aria-label="Удалить задачу"
      onClick={onDelete}
    >
      <DeleteIcon size = {24}/>
    </Button>
  )
}