import CheckIcon from '@/shared/ui/icons/check.svg?react'
import clsx from 'clsx'
import styles from './ToggleTodo.module.scss'
import {useContext} from "react";
import {ActionsContext} from "@/entities/todo";

export const ToggleTodo = (props) => {
  const {
    id,
    isCompleted,
  } = props

  const {toggleTodo} = useContext(ActionsContext)

  return (
    <label className={styles.root}>
      <input
        className={clsx(styles.input, 'sr-only')}
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTodo(id)}
      />

      <span className={styles.box}>
        <CheckIcon
          className={clsx(
            styles.icon,
          )}
        />
      </span>
    </label>
  )
}
