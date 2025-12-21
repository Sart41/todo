import { TodoItem } from "@/widgets/todo-item"
import styles from './TodoList.module.scss'
import clsx from "clsx"

export const TodoList = (props) => {

  const {
    todos = [],
    toggleTodo,
    deleteTodo,
    renameTodo
  } = props


  return (
    <ul className={clsx(styles.root)}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onDeleteTodo={() => deleteTodo(todo.id)}
            onToggleTodo={() => toggleTodo(todo.id)}
            onRenameTodo={renameTodo} 
          />
        </li>
      ))}
    </ul>
  )

}
