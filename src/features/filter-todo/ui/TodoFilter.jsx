import {Button} from '@/shared/ui/Button'
import {clsx} from 'clsx'
import {memo, useContext} from "react";
import styles from './TodoFilter.module.scss'
import {ActionsContext, DataContext} from "@/entities/todo";


export const TodoFilter = memo((props) => {
  const {
    filter,
  } = useContext(DataContext)

  const {
    setFilter,
  } = useContext(ActionsContext)

  const FILTERS = [
    {id: 'all', label: 'Все'},
    {id: 'completed', label: 'Выполненные'},
    {id: 'active', label: 'Активные'},
  ]

  return (
    <div className={clsx(styles.root)}>
      <span>Отобразить</span>
      <div className={clsx(styles.actions)}>

        {FILTERS.map(({id, label}) => (
          <Button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            isActive={filter === id}
          >
            {label}
          </Button>
        ))}

      </div>
    </div>
  )
})