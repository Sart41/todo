import {BaseForm} from '@/shared/ui/BaseForm'
import {memo} from 'react'
import {Button} from "@/shared/ui/Button";
import {useAddTodo} from "@/features/add-todo/model/useAddTodo";

import styles from './AddTodo.module.scss'

export const AddTodo = memo((props) => {

  const {
    title,
    error,
    handleSubmit,
    handleChange,
  } = useAddTodo()

  return (
    <section className={styles.root}>

      <BaseForm
        fieldId='new-todo'
        error={error}
        value={title}
        fieldLabel='Новая задача'
        onChange={handleChange}
        onSubmit={handleSubmit}

        actions={
          <Button
            type='submit'
            variant='primary'
            onMouseDown={(e) => e.preventDefault()}
          >
            Добавить
          </Button>
        }
      />
    </section>
  )
})