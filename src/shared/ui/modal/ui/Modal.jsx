import clsx from 'clsx'
import styles from './Modal.module.scss'
import { useEffect } from 'react'

export const Modal = (props) => {
  const {
    onClose,
    children
  } = props


  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

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