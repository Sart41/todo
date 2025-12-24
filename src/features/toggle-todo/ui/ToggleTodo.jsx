import CheckIcon from '@/shared/ui/icons/check.svg?react'
import styles from './ToggleTodo.module.scss'
import clsx from 'clsx'

export const ToggleTodo = (props) => {
  const {
    id,
    isCompleted,
    onToggle
  } = props

  return (
    <label className={styles.root}>
      <input
        className={clsx(styles.input, 'sr-only')}
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggle(id)}
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
