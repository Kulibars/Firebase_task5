import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase.js";

export const useRequestGetTodos = (refreshTodosFlag) => {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    const todoFDbRef = ref(db, "todos");

    return onValue(todoFDbRef, (snapshot) => {
      const loadedtodo = snapshot.val() || {};
      setTodos(loadedtodo);
    });
  });

  return {
    todos,
  };
};
