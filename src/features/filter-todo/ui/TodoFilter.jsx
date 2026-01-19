import {clsx} from 'clsx'
import {memo, useContext} from "react";
import {ActionsContext, DataContext} from "@/entities/todo";
import {SegmentedControl} from "@/shared/ui/SegmentedControl";

import styles from './TodoFilter.module.scss'

const FILTERS = [
  {value: 'all', label: 'Все'},
  {value: 'completed', label: 'Выполненные'},
  {value: 'active', label: 'Активные'},
]

export const TodoFilter = memo((props) => {
  const {
    filter,
  } = useContext(DataContext)

  const {
    setFilter,
  } = useContext(ActionsContext)

  return (
    <section className={clsx(styles.root)}>
      <span>Отобразить</span>
      <div className={clsx(styles.actions)}>

        <SegmentedControl
          name={filter}
          options={FILTERS}
          value={filter}
          onChange={setFilter}
          size='md'
        />

      </div>
    </section>
  )
})