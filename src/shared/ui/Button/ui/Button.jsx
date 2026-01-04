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
      data-active={isActive}
      data-icon-only={iconOnly}
      className={clsx(styles.root, className, styles[variant])}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  )
})

