import clsx from "clsx"
import styles from "./Button.module.scss"

export const Button = (props) => {
  const {
    className,
    type = 'button',
    onClick,
    iconOnly = false,
    children,
    ...rest
  } = props

  return (
    <button
      className={clsx(styles.root, iconOnly && styles.iconOnly, className)}
      type={type}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

