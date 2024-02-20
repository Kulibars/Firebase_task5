import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useRequestUpdateTodo = (refreshTodos) => {
  const [updateTodo, setUpdateTodo] = useState("");

  const onTodoUpdateChange = ({ target }) => {
    setUpdateTodo(target.value);
  };

  const addTodoUpdateClick = ({ target }) => {
    const todoDbRef = ref(db, `todos/${target.id}`);

    set(todoDbRef, {
      title: updateTodo,
    })
      .then((response) => {})
      .finally();
  };

  return { onTodoUpdateChange, addTodoUpdateClick };
};
