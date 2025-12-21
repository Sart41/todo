// import { toggleTodo } from './../model/toggleTodo.js'
// import CheckIcon from '/check.svg?react'
// import styles from './ToggleTodo.module.scss'
// import clsx from 'clsx'

// export const ToggleTodo = (props) => {
//   const {
//     id,
//     isCompleted,
//     onToggle,
//   } = props

//   return (
//     <>
//       <label className={clsx(styles.root)}>
//         <input
//           className={clsx(styles.input)}
//           type="checkbox"
//           checked={isCompleted}
//           id={id}
//           // onChange={({ target }) => { toggleTodo(id, target.checked) }}
//           onChange={onToggle}
//         />


//         {/* <span className={clsx(styles.box)} aria-hidden></span> */}
//         <span className={styles.box}>
//           <CheckIcon
//             className={clsx(
//               styles.icon
//             )}
//           />
//         </span>

//       </label>
//     </>
//   )
// }

import CheckIcon from '@/shared/ui/icons/check.svg?react'
import styles from './ToggleTodo.module.scss'
import clsx from 'clsx'

export const ToggleTodo = (props) => {
  const {
    id,
    isCompleted,
    onToggle
  } = props

  return (
    <label className={styles.root}>
      <input
        className={clsx(styles.input, 'sr-only')}
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggle(id)}
      />

      <span className={styles.box}>
        <CheckIcon
          className={clsx(
            styles.icon,
          )}
        />
      </span>
    </label>
  )
}
