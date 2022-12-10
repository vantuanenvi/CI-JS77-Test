import React from "react";

export default function Form({setStatus, inputText, setInputText, todos, setTodos }) {
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('')
  };
  
  const handleStatus = (e) => {
    setStatus(e.target.value)
}
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandle}
        type="text"
        className="todo-input"
        placeholder="add details"
      />
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i> Add
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </form>
  );
}
