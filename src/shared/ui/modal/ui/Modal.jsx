import clsx from 'clsx'
import styles from './Modal.module.scss'


export const Modal = (props) => {
  const {
    onClose,
    children
  } = props

  return (
    <div
     className={clsx(styles.overlay)}
     onClick={onClose}
     >
      <div
        className={clsx(styles.modal)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}