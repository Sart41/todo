import {useContext, useEffect} from "react";
import clsx from 'clsx'
import {TodoList} from '@/widgets/todo-list'
import {TodoInfo} from '@/widgets/todo-info'
import {TodoFilter} from '@/features/filter-todo'
import {AddTodo} from '@/features/add-todo/ui/AddTodo'

import {DataContext} from "@/entities/todo";
import styles from "./TodosPage.module.scss"


export const TodosPage = () => {
  // const {
  //   todos,
  //   addTodo,
  //   deleteTodo,
  //   toggleTodo,
  //   clearTodos,
  //   renameTodo,
  // } = useTodos();

  const {totalCount, newTodoInputRef} = useContext(DataContext);

  useEffect(() => {
    // newTodoInputRef.current.focus()
  }, [])

  return (
    <div className={clsx(styles.page)}>
      <div className={clsx('container', styles.todo)}>
        <h1 className={clsx(styles.title)}>hello</h1>
        <div className={clsx(styles.content)}>

          {/*<TodoProvider>*/}

          <AddTodo
            // onAddTodo={addTodo}
            // newTodoInputRef={newTodoInputRef}
          />

          {totalCount > 0 && <TodoFilter />}

          {totalCount > 0 && <TodoInfo />}

          <TodoList />

          {/*</TodoProvider>*/}


        </div>
      </div>
    </div>
  )
}

