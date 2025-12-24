import clsx from "clsx";
import styles from './TodoFormUI.module.scss'
import { Field } from '@/shared/ui/Field'
import { Button } from '@/shared/ui/Button'

export const TodoFormUI = (props) => {
  const {
    error,
    className,
    fieldId,
    fieldLabel,
    value,
    buttonTitle,
    autoFocus,
    onSubmit,
    onChange,
  } = props


  return (
    <form
      onSubmit={onSubmit}
      className={clsx(styles.root, className)}
    >

      <Field
        id={fieldId}
        label={fieldLabel}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        error={error}
      />

      <Button
        type='submit'
        className={clsx(styles.button)}
      >
        {buttonTitle}
      </Button>
    </form>
  )
}