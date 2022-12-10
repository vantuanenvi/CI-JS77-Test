import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: ! item.completed,
          };
        }
        return item;
      })
    );
  };


  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={handleComplete} className="complete-btn">
        Completed
      </button>
      <button onClick={handleDelete} className="trash-btn">
       Delete
      </button>
    </div>
  );
}
