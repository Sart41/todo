import clsx from "clsx"
import styles from "./Button.module.scss"
import {memo} from "react";

export const Button = memo((props) => {
  const {
    className,
    type = 'button',
    onClick,
    iconOnly = false,
    isActive = false,
    variant,
    children,
    ...rest
  } = props

  return (
    <button
      type={type}
      className={clsx(styles.button, {
        [styles.active]: isActive,
        [styles.iconOnly]: iconOnly
      }, styles[variant], className)}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  )
})

