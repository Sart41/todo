import clsx from 'clsx'
import {useContext} from "react";
import {TodoInfo} from '@/widgets/todo-info'
import {AddTodoMobile} from "@/features/add-todo";
import {AddTodo} from '@/features/add-todo/'
import {TodoFilter} from '@/features/filter-todo'
import {DataContext} from "@/entities/todo";
import {TodoList} from '@/entities/todo-list'
import {Header} from "@/shared/ui/header";

import styles from "./TodosPage.module.scss"

export const TodosPage = () => {

  const {stats} = useContext(DataContext);

  return (
    <div className={clsx(styles.page)}>
      <div className={clsx('container', styles.todo)}>
        <div className={clsx(styles.content)}>

          <Header />

          <div
            className={clsx(styles.addTodoWrapper)}
          >
            <div className={styles.desktopVersion}>
              <AddTodo />
            </div>

            <div className={styles.mobileVersion}>
              <AddTodoMobile />
            </div>
          </div>


          {stats.total > 0 && <TodoFilter />}

          {stats.total > 0 && <TodoInfo />}

          <TodoList />

          <div className={styles.bottomSpacer} />

        </div>
      </div>
    </div>
  )
}

