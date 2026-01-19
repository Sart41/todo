import {BaseForm} from "@/shared/ui/BaseForm";
import {Button} from '@/shared/ui/Button'
import {GiCancel} from "react-icons/gi";
import {TfiSave} from "react-icons/tfi";
import {useEditTodo} from "@/features/edit-todo/model/useEditTodo";

export const EditForm = (props) => {
  const {todoId, onCancel} = props;

  const {
    title,
    error,
    handleSubmit,
    handleCancel,
    handleChange
  } = useEditTodo(props)

  return (
    <BaseForm
      fieldId={`edit-todo-${todoId}`}
      value={title}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      error={error}

      actions={
        <>
          <Button
            aria-label='Отменить'
            iconOnly
            onClick={onCancel}
          >
            <GiCancel
              size={24}
              color='var(--status-error)'
            />
          </Button>

          <Button
            aria-label='Сохранить'
            type='submit'
            iconOnly
          >
            <TfiSave
              size={24}
              color='var(--accent)'
            />
          </Button>
        </>
      }
    />
  )
}