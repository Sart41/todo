import {useRef, useState} from "react";
import {useClickOutside} from "@/shared/lib/hooks/useClickOutside";

import styles from './MobileDropDown.module.scss'

export const MobileDropdown = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useClickOutside(menuRef, () => {
    setIsOpen(false)
  })

  return (
    <div
      ref={menuRef}
      className={styles.MobileDropdown}
    >
      <button
        type="button"
        className={styles.dotsButton}
        onClick={() => {
          setIsOpen(true)
        }}
        aria-label="Действия"
      >
        ⋮
      </button>
      {isOpen && (
        <div
          className={styles.menu}
          onClick={() => setIsOpen(false)}
        >
          {children}
        </div>
      )}
    </div>

  )
}