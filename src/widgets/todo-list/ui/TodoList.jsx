import clsx from "clsx"
import {useContext, useEffect, useRef} from "react"
import {ActionsContext, DataContext, TodoItem} from "@/entities/todo";
import {DeleteTodo} from "@/features/delete-todo";
import {ToggleTodo} from "@/features/toggle-todo";
import {EmptyState} from "@/shared/ui/EmptyState";
import {EditIcon} from "@/shared/ui/icons";
import {Button} from "@/shared/ui/Button";

import styles from './TodoList.module.scss'

const EMPTY_MESSAGES = {
  all: 'Начни добавлять задачи, и они тут появятся',
  active: 'Красавчик, ты выполнил все активные задачи!',
  completed: 'Ты не выполнил еще ни одной задачи, постарайся'
}

export const TodoList = () => {

  const {
    filteredTodos = [],
    totalCount,
    filter,
  } = useContext(DataContext)

  const {renameTodo} = useContext(ActionsContext)

  const prevCountRef = useRef(totalCount);
  const listRef = useRef(null);

  useEffect(() => {
    if (totalCount > prevCountRef.current) {

      const listElement = listRef.current

      if (listElement?.lastElementChild) {
        listElement.lastElementChild.scrollIntoView({behavior: 'smooth'});
      }
    }
    prevCountRef.current = totalCount;
  }, [totalCount])

  if (filteredTodos.length === 0) {
    return <EmptyState message={EMPTY_MESSAGES[filter]} />
  }

  return (
    <ul
      className={clsx(styles.root)}
      role="list"
      ref={listRef}
    >

      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          role="listitem"
        >

          <TodoItem
            isCompleted={todo.isCompleted}
            title={todo.title}
            id={todo.id}
            onSafe={(newTitle) => renameTodo(todo.id, newTitle)}
            statusSlot={
              <ToggleTodo
                id={todo.id}
                isCompleted={todo.isCompleted}
              />}

            actionsSlot={({onEdit, isEditing}) => (
              <>
                <Button
                  onClick={onEdit}
                  disabled={isEditing}
                  data-icon-only={true}
                  aria-label='Изменить задачу'
                >
                  <EditIcon
                    size={24}
                    color='blue'
                  />
                </Button>
                <DeleteTodo
                  id={todo.id}
                />
              </>)
            }
          />
        </li>
      ))}
    </ul>
  )
}
