import clsx from "clsx"
import {memo, useContext} from "react";
import {ClearTodos} from "@/features/clear-todos"
import {DataContext} from "@/entities/todo";

import styles from './TodoInfo.module.scss'

export const TodoInfo = memo(() => {

  const {
    totalCount,
    completedCount,
  } = useContext(DataContext)

  const statsText = `Задачи в процессе выполнения ${completedCount} / ${totalCount}`

  return (
    <section className={clsx(styles.root)}>
      <div className={clsx(styles.info)}><span>{statsText}</span>
      </div>

      <ClearTodos
        className={clsx(styles.button)}
      />
    </section>
  )
})