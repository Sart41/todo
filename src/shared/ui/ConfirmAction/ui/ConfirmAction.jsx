import styles from './ConfirmAction.module.scss';
import {Button} from "@/shared/ui/Button";

export const ConfirmAction = (props) => {
  const {
    message,
    onConfirm,
    onCancel,
    confirmText = "Да",
    cancelText = "Нет"
  } = props

  return (
    <div className={styles.root}>
      <p>{message}</p>
      <div className={styles.buttons}>
        <Button onClick={onCancel}>{cancelText}</Button>
        <Button
          onClick={onConfirm}
          variant="danger"
        >{confirmText}</Button>
      </div>
    </div>)
}