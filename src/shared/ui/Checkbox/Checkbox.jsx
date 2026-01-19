import clsx from "clsx";
import {useId} from "react";

import styles from './Checkbox.module.scss';

export const Checkbox = (props) => {
  const {
    checked,
    onChange,
    label,
    className,
    ref,
    ...restProps
  } = props
  const id = useId()

  return (
    <div className={clsx(styles.root, className)}>
      <input
        {...restProps}
        ref={ref}
        type="checkbox"
        className={clsx(styles.input, 'sr-only')}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label
        className={styles.box}
        htmlFor={id}
      >
        <svg
          className={styles.icon}
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M3.5 8L7 11.5L13.5 4.5" />
        </svg>
      </label>
      {label && <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>}
    </div>
  )
}