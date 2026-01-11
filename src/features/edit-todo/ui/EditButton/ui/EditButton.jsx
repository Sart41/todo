import {Button} from "@/shared/ui/Button";
import {EditIcon} from "@/shared/ui/icons";

import styles from './EditButton.module.scss'

export const EditButton = (props) => {
  const {
    onClick
  } = props;


  return (
    <Button
      variant="iconOnly"
      aria-label='Изменить задачу'
      className={styles.editButton}
      onClick={onClick}
    >
      <EditIcon />
    </Button>
  )
}