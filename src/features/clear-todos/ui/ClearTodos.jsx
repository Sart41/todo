import { Button } from "@/shared/ui/Button"
import styles from './ClearTodos.module.scss'
import clsx from "clsx"


export const ClearTodos = (props) => {
  const {
    className,
    onClearTodos
  } = props


  return (
    <Button
    className ={clsx(styles.prototype, className)}
      onClick={onClearTodos}
    >
      Удалить все
    </Button>
  )
}