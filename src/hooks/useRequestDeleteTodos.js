import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useRequestDeleteTodos = (refreshTodos) => {
  const deleteTodo = ({ target }) => {
    const todoFDbRef = ref(db, `todos/${target.id}`);
    remove(todoFDbRef)
      .then((response) => {})
      .finally();
  };
  return {
    deleteTodo,
  };
};
