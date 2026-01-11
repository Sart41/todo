import {useContext} from "react";
import clsx from 'clsx'
import {TodoList} from '@/entities/todo-list'
import {TodoInfo} from '@/widgets/todo-info'
import {TodoFilter} from '@/features/filter-todo'
import {AddTodo} from '@/features/add-todo/ui/AddTodo/AddTodo'
import {ActionsContext, DataContext} from "@/entities/todo";
import {Header} from "@/shared/ui/header";
import {AddTodoMobile} from "@/features/add-todo";

import styles from "./TodosPage.module.scss"

export const TodosPage = () => {

  const {totalCount} = useContext(DataContext);
  const {newTodoInputRef} = useContext(ActionsContext)

  return (
    <div className={clsx(styles.page)}>
      <div className={clsx('container', styles.todo)}>
        <div className={clsx(styles.content)}>

          <Header />

          <AddTodo />

          {totalCount > 0 && <TodoFilter />}

          {totalCount > 0 && <TodoInfo />}

          <TodoList />

          <AddTodoMobile />

        </div>
      </div>
    </div>
  )
}

