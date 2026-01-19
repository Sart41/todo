import {useContext, useEffect, useRef} from "react";
import {DataContext} from "@/entities/todo";

export const useTodoList = () => {
  const {
    todos = [],
    stats,
    filter,
  } = useContext(DataContext)

  const prevCountRef = useRef(stats.total);
  const listRef = useRef(null);

  useEffect(() => {
    if (stats.total > prevCountRef.current) {

      const listElement = listRef.current

      if (listElement?.lastElementChild) {
        listElement.lastElementChild.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
    prevCountRef.current = stats.total;
  }, [stats.total])

  return {
    todos,
    filter,
    listRef
  };
}