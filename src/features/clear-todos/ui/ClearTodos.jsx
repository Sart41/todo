import {Button} from "@/shared/ui/Button"
import clsx from "clsx"
import {useContext} from "react";
import {ActionsContext} from "@/entities/todo";

import styles from './ClearTodos.module.scss'


export const ClearTodos = (props) => {
  const {
    className,
  } = props

  const {clearTodos, setFilter} = useContext(ActionsContext)

  const handleClick = () => {
    if (window.confirm('Вы уверены, что хотите удалить все задачи?')) {
      clearTodos()
      setFilter('all')
    }
  }

  return (
    <Button
      className={clsx(styles.root, className)}
      onClick={handleClick}
    >
      Удалить все
    </Button>
  )
}