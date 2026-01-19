import clsx from "clsx";
import styles from './EmptyState.module.scss';

export const EmptyState = (props) => {
  const {
    title = 'Cписок задач пуст!',
    message = ''
  } = props

  return (
    <div className={clsx(styles.isEmptyMessage)}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.message}>{message}</p>
    </div>
  )
}