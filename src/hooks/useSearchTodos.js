import { useState, useEffect } from "react";

export const useSearchTodos = (todos) => {
  const [searchTodos, setSearchTodos] = useState([]);
  const [searchTodoEl, setSearchTodoEl] = useState("");

  const onSearchTodoChange = ({ target }) => {
    setSearchTodoEl(target.value);
  };
  useEffect(() => {
    if (searchTodoEl === "") {
      setSearchTodos(todos);
    } else {
      setSearchTodos(
        Object.fromEntries(
          Object.entries(todos).filter(([id, { title }]) => {
            return (
              title.toLowerCase().indexOf(searchTodoEl.toLowerCase()) !== -1
            );
          })
        )
      );
    }
  }, [todos]);

  return { searchTodos, onSearchTodoChange };
};
