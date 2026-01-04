import {useContext, useEffect} from "react";
import clsx from 'clsx'
import {TodoList} from '@/widgets/todo-list'
import {TodoInfo} from '@/widgets/todo-info'
import {TodoFilter} from '@/features/filter-todo'
import {AddTodo} from '@/features/add-todo/ui/AddTodo'

import {ActionsContext, DataContext} from "@/entities/todo";
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

  const {totalCount} = useContext(DataContext);
  const {newTodoInputRef} = useContext(ActionsContext)

  useEffect(() => {
    newTodoInputRef.current?.focus()
  }, [])

  return (
    <div className={clsx(styles.page)}>
      <div className={clsx('container', styles.todo)}>
        <h1 className={clsx(styles.title)}>hello</h1>
        <div className={clsx(styles.content)}>

          <AddTodo />

          {totalCount > 0 && <TodoFilter />}

          {totalCount > 0 && <TodoInfo />}

          <TodoList />

        </div>
      </div>
    </div>
  )
}

