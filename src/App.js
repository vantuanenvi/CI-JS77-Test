import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fillerTodos, setFillerTodos] = useState([]);
 
  useEffect(()=>{
    getLocalTodos();

  },[]);
  useEffect(()=>{
    handleFiller();
    saveLocalTodos();
  },[todos,status])



  const handleFiller = () => {
    switch(status){
      case 'completed':
        setFillerTodos(todos.filter((todo) => todo.completed === true));
        break;
        case 'active':
          setFillerTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFillerTodos(todos);
          break;
    }
    }


    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
      };
 
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
      }
    }
  return (
    <div className="App">
      <h1 className="header"> #Todo app</h1>
      <Form
        setStatus={setStatus}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      ></Form>
      <TodoList
        fillerTodos={fillerTodos}
        setTodos={setTodos}
        todos={todos}
      ></TodoList>
    </div>
  );
}

export default App;
