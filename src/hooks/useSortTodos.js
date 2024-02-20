import { useState, useEffect } from "react";

export const useSortTodos = (searchTodos) => {
  const [sortTodo, setSortTodo] = useState({});
  useEffect(() => {
    setSortTodo(
      Object.fromEntries(
        Object.entries(searchTodos).sort((a, b) =>
          a[1].title.toLowerCase() > b[1].title.toLowerCase() ? 1 : -1
        )
      )
    );
  }, [searchTodos]);

  return { sortTodo };
};
