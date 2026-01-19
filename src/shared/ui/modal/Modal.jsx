import {useEffect} from 'react'
import {createPortal} from "react-dom";

import styles from './Modal.module.scss'

export const Modal = (props) => {
  const {
    isOpen,
    onClose,
    children,
    title,
  } = props


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className={styles.title}>{title}</h2>}

        {children}
      </div>
    </div>,
    document.body
  )
}