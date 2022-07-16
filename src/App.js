import "./App.css";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import React, { useState } from "react";

function App() {
  // let todos = [ ==> Converting this variable into State Hook, so that it can be updated after any Add/Delete operation
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to market to get the work done",
    },
    {
      sno: 2,
      title: "Go to the College",
      desc: "You need to go to College to get the work done",
    },
    {
      sno: 3,
      title: "Go to the Station",
      desc: "You need to go to Station to get the work done",
    },
  ]);

  const onDelete = (todo) => {
    console.log("Deleted Todo : ", todo);

    // Deleting this way does not Work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((t) => {
        return t !== todo;
      })
    );
  };

  return (
    <>
      <Header title="Todozen by React" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
