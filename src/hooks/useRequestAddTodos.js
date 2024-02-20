import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useRequestAddTodos = (refreshProducts) => {
  const [addTodo, setAddTodo] = useState("");
  const onTodoChange = ({ target }) => {
    setAddTodo(target.value);
  };

  const AddTodoClick = () => {
    const todosDbRef = ref(db, "todos");

    push(todosDbRef, {
      title: addTodo,
    })
      .then((response) => {})
      .finally();
  };

  return {
    AddTodoClick,
    onTodoChange,
  };
};
