import { Button } from '@/shared/ui/Button'
import { clsx } from 'clsx'
import styles from './TodoFilter.module.scss'


export const TodoFilter = (props) => {
   const {
      onChange,
      value
   } = props


   return (
      <div className={clsx(styles.root)}>
         <span>Отобразить</span>
         <div className={clsx(styles.actions)}>

            <Button
               isActive={value === 'all'}
               onClick={() => onChange('all')}
            >
               Все
            </Button>

            <Button
               isActive={value === 'active'}
               onClick={() => onChange('active')}
            >
               Активные
            </Button>

            <Button
               isActive={value === 'completed'}
               onClick={() => onChange('completed')}
            >
               Выполненные
            </Button>

         </div>
      </div>
   )
}