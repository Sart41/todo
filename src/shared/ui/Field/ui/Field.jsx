import clsx from "clsx"
import styles from "./Field.module.scss"
import {forwardRef} from "react";

export const Field = forwardRef((props, ref) => {

  const {
    className = '',
    id,
    label,
    type = 'text',
    value,
    autoFocus = false,
    placeholder = ' ',
    error,
    onChange,
    onKeyDown,
    onBlur,
    ...rest
  } = props

  const errorId = `${id}-error`

  return (
    <div
      className={clsx(styles.field, className,
        {[styles.hasError]: !!error}
      )}
    >
      <div className={styles.inputWrapper}>

        <input
          {...rest}
          id={id}
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}

          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />

        {label && (<label htmlFor={id}>
          {label}
        </label>)}
      </div>

      <div className={styles.errorMessage}>
        {error && (
          <div className={styles.errorContainer}>
            <p
              id={errorId}
              className={styles.error}
              role="alert"
            >{error}</p>
          </div>
        )}
      </div>
    </div>
  )
})