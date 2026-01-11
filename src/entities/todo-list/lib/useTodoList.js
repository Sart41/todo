import {useContext, useEffect, useRef} from "react";
import {DataContext} from "@/entities/todo";

export const useTodoList = () => {
  const {
    filteredTodos = [],
    totalCount,
    filter,
  } = useContext(DataContext)
  const prevCountRef = useRef(totalCount);
  const listRef = useRef(null);

  useEffect(() => {
    if (totalCount > prevCountRef.current) {

      const listElement = listRef.current

      if (listElement?.lastElementChild) {
        listElement.lastElementChild.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
    prevCountRef.current = totalCount;
  }, [totalCount])

  return {
    filteredTodos,
    filter,
    listRef
  };
}