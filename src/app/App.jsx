import {TodosPage} from "@/pages/TodosPage"
import {TodoProvider} from "@/entities/todo";
import {SettingsProvider} from "@/entities/settings/model/SettingsContexts";

const App = () => {

  return (
    <SettingsProvider>
      <TodoProvider>
        <TodosPage />
      </TodoProvider>
    </SettingsProvider>
  )
}

export default App