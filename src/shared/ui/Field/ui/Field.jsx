import clsx from "clsx"
import styles from "./Field.module.scss"

export const Field = (props) => {
  const {
    className = '',
    id,
    label,
    type = 'text',
    value,
    onChange,
    autoFocus = false,
    placeholder = ' ',
    error,
  } = props

  return (
    <div
      className={clsx(styles.field, className,
        { [styles.error]: error }
      )}>
      <div className={styles.inputWrapper}>

        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          onChange={({ target }) => onChange(target.value)}
        />

        {label &&
          (<label
            htmlFor={id}
          >
            {label}
          </label>)}
      </div>

      {<div className={styles.errorMessage}>
        {error &&
          <div className={styles.errorContainer}>

            <p className={styles.error}>{error}</p>
          </div>
        }
      </div>
      }

    </div >
  )
}