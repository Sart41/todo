import clsx from "clsx"
import {TodoItem} from "@/entities/todo";
import {DeleteTodo} from "@/features/delete-todo";
import {ToggleTodo} from "@/features/toggle-todo";
import {EmptyState} from "@/shared/ui/EmptyState";
import {useTodoList} from '../lib/useTodoList'
import {EditButton} from "@/features/edit-todo/ui/EditButton";

import styles from './TodoList.module.scss'

const EMPTY_MESSAGES = {
  all: 'Начни добавлять задачи, и они тут появятся',
  active: 'Красавчик, ты выполнил все активные задачи!',
  completed: 'Ты не выполнил еще ни одной задачи, постарайся'
}

export const TodoList = () => {
  const {filteredTodos, filter, listRef} = useTodoList();

  if (filteredTodos.length === 0) {
    return <EmptyState message={EMPTY_MESSAGES[filter]} />
  }

  return (
    <section className={styles.root}>
      <ul
        className={clsx(styles.list)}
        role="list"
        ref={listRef}
      >
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            role="listitem"
          >

            <TodoItem
              todo={todo}

              statusSlot={
                <ToggleTodo
                  id={todo.id}
                  isCompleted={todo.isCompleted}
                />
              }

              actionsSlot={({onEdit, isEditing}) => (
                <>
                  <EditButton
                    onClick={onEdit}
                    disabled={isEditing}
                  />

                  <DeleteTodo
                    id={todo.id}
                  />
                </>)
              }
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
