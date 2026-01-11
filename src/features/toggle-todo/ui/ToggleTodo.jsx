import {useContext} from "react";
import {ActionsContext} from "@/entities/todo";
import {Checkbox} from "@/shared/ui/Checkbox";

export const ToggleTodo = (props) => {
  const {
    id,
    isCompleted,
    className,
  } = props

  const {toggleTodo} = useContext(ActionsContext)

  return (
    <Checkbox
      className={className}
      checked={isCompleted}
      onChange={() => toggleTodo(id)}
      aria-label="Отметить задачу как выполненную"
    />
  )
}
