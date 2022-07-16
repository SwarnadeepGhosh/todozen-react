import "./App.css";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import React, { useState , useEffect } from "react";
import { AddTodo } from "./Components/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // let todos = [ ==> Converting this variable into State Hook, so that it can be updated after any Add/Delete operation
  const [todos, setTodos] = useState(initTodo);
  // This will tell react to run this function whenever any value changes for todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  

  const onDelete = (todo) => {
    console.log("Deleted Todo : ", todo);
    // Deleting this way does not Work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // Setting all other todo into todos, which not matching Deleted Todo
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const addedTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    // Adding new todo into todolist and updating the page using useState
    setTodos([...todos, addedTodo]);
    // localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Added Todo : ", addedTodo);
  };

  return (
    <>
      <Header title="Todozen by React" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
