import {Button} from "@/shared/ui/Button";
import {EditIcon} from "@/shared/ui/icons";


export const EditButton = (props) => {
  const {onClick} = props;


  return (
    <Button
      // className={clsx(styles.root)}
      iconOnly
      onClick={onClick}
      aria-label='Изменить задачу'
    >
      <EditIcon size={24} />
    </Button>
  )
}