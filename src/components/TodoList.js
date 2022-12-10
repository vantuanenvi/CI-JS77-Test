import React from "react";
import Todo from "./Todo";

export default function TodoList({ fillerTodos,todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {fillerTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          ></Todo>
        ))}
      </ul>
    </div>
  );
}
