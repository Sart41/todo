import { Button } from '@/shared/ui/Button'
import { clsx } from 'clsx'
import styles from './TodoFilter.module.scss'


export const TodoFilter = (props) => {
   const {
      setFilter
   } = props

   return (
      <div className={clsx(styles.root)}>
         <span>Отобразить</span>
         <div className={clsx(styles.actions)}>
            <Button onClick= {()=>setFilter('all')}>
               Все
            </Button>

            <Button onClick={() => setFilter('active')}>
               Активные
            </Button>

            <Button onClick={() => setFilter('completed')}>
               Выполненные
            </Button>
         </div>
      </div>
   )
}