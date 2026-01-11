import clsx from 'clsx';
import styles from './Drawer.module.scss';

export const Drawer = (props) => {
  const {isOpen, onClose, children, title} = props

  return (
    <div
      className={clsx(styles.overlay, {[styles.opened]: isOpen})}
      onClick={onClose}
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2>{title}</h2>
          <button
            onClick={onClose}
            className={styles.closeBtn}
          >&times;</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};