import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  return (
    <div className="container mb-5">
      <h2 className="text-center my-3">Todo List</h2>
      {/* <Todo todo={props.todos[0]}/> */}

      {props.todos.length === 0 ? (
        <div className="alert alert-info" role="alert">No Todos to Display</div>
      ) : (
        props.todos.map((todo) => {
          return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />;
        })
      )}
    </div>
  );
};
