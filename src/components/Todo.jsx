import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => setTodo(res.data));
  }, []);

  return (
    <>
      <ul>
        {todos && todos.length
          ? todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
          : ""}
      </ul>
    </>
  );
};

export default Todo;
