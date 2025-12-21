import clsx from "clsx"
import styles from "./Button.module.scss"

export const Button = (props) => {
  const {
    className,
    type = 'button',
    onClick,
    iconOnly = false,
    isActive = false,
    children,
    ...rest
  } = props

  return (
    <button
      type={type}
      data-active={isActive}
      data-icon-only={iconOnly}
      className={clsx(styles.root, className)}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

