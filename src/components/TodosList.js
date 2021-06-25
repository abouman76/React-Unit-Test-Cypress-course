import React, { useState, useEffect } from "react";
import Todo from "./Todo";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      //console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      setTodos(data);
    }
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
