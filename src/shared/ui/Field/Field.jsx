import clsx from "clsx"
import styles from "./Field.module.scss"
import {useId} from "react";

export const Field = (props) => {

  const {
    className = '',
    label,
    type = 'text',
    value,
    placeholder = ' ',
    autoFocus,
    ref,
    error,
    onChange,
    onKeyDown,
    id: externalId,
    ...rest
  } = props

  const generatedId = useId();
  const id = externalId || generatedId;
  const errorId = `${id}-error`;

  return (
    <div className={clsx(styles.field, className)}>
      <div className={styles.inputWrapper}>

        <input
          {...rest}
          className={clsx(styles.input, {[styles.hasError]: !!error})}
          id={id}
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          autoFocus={autoFocus}
          onChange={onChange}
          onKeyDown={onKeyDown}

          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />

        {label && (<label
          className={styles.label}
          htmlFor={id}
        >
          {label}
        </label>)}
      </div>

      <p
        id={errorId}
        className={clsx(styles.error, {[styles.visible]: !!error})}
        role="alert"
      >
        {error}
      </p>
    </div>
  )
}