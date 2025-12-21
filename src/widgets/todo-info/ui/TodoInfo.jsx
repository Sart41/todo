import { ClearTodos } from "@/features/clear-todos"
import clsx from "clsx"
import styles from './TodoInfo.module.scss'

export const TodoInfo = (props) => {

  const {
    total,
    completed,
    onClearTodos
  } = props

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.info)}>Задачи в процессе выполнения <span>{completed} / {total}</span></div>

      {total > 0 && 
      <ClearTodos 
      className={clsx(styles.button)}
      onClearTodos={onClearTodos} 
      
      />}
    </div>
  )
}