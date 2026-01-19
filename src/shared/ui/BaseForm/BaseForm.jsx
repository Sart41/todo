import clsx from "clsx";
import {useEffect, useRef} from "react";
import {useClickOutside} from "@/shared/lib/hooks/useClickOutside";
import {Field} from '@/shared/ui/Field'

import styles from './BaseForm.module.scss'

export const BaseForm = (props) => {
  const {
    value,
    onChange,
    onSubmit,
    onCancel,
    fieldId,
    fieldLabel = '',
    error,
    className,
    actions,
    autoFocus = 'true',
    ...rest
  } = props

  const inputRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [autoFocus])


  useClickOutside(formRef, () => {
    if (onCancel) onCancel()
  })

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && onCancel) onCancel()
  }

  return (
    <form
      className={clsx(styles.root, className)}
      onSubmit={onSubmit}
      ref={formRef}
    >

      <Field
        id={fieldId}
        label={fieldLabel}
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        error={error}
        autoFocus={autoFocus}
        {...rest}
      />

      {actions && (
        <div className={styles.actions}>
          {actions}
        </div>
      )}
    </form>
  )
}