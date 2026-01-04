import clsx from "clsx";
import {Field} from '@/shared/ui/Field'

import styles from './TodoFormUI.module.scss'

export const TodoFormUI = (props) => {
  const {
    value,
    onSubmit,
    onChange,
    onKeyDown,
    fieldId,
    fieldLabel = '',
    error,
    className,
    formRef,
    inputRef,
    actions,
  } = props


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
        onKeyDown={onKeyDown}
        error={error}
      />

      {actions && (
        <div className={styles.actions}>
          {actions}
        </div>
      )}
    </form>
  )
}