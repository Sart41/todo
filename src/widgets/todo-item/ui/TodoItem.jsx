import clsx from "clsx"
import styles from "./TodoItem.module.scss"
import { ToggleTodo } from "@/features/toggle-todo"
import { DeleteTodo } from "@/features/delete-todo"
import { RenameTodoButton } from "@/features/rename-todo"

export const TodoItem = (props) => {

  const {
    todo,
    className,
    onDeleteTodo,
    onToggleTodo,
    onRenameTodo,
  } = props


  return (
    <div className={clsx(styles.root, className)}>
      <div className={clsx(styles.checkbox )}>
        <ToggleTodo
          isCompleted={todo.isCompleted}
          onToggle={onToggleTodo}
        />
      </div>

      <div
        className={clsx(styles.title, todo.isCompleted && styles.checked)}>{todo.title}
       </div>

      <div className={clsx(styles.actions)}>

        <RenameTodoButton
          onRename={onRenameTodo}
          initialTitle={todo.title}
          id={todo.id}
        />

        <DeleteTodo
          onDelete={onDeleteTodo}
        />
        
      </div>
    </div>
  )
}