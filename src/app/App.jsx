import {TodosPage} from "@/pages/TodosPage"
import {TodoProvider} from "@/entities/todo";

const App = () => {

  return (
    <TodoProvider>
      <TodosPage />
    </TodoProvider>
  )

}

export default App