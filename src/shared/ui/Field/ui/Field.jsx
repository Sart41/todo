import clsx from "clsx"
import styles from "./Field.module.scss"

export const Field = (props) => {
  const {
    className = '',
    id,
    label,
    type = 'text',
    value,
    onInput,
  } = props

  return (
    <div className={clsx(styles.field, className)}>

      <label
        className={clsx(className)}
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className={clsx(className)}
        id={id}
        autoFocus
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
        />

    </div >
  )
}