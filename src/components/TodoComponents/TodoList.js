import React, { Component } from "react";
import Todo from "./Todo"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default function TodoList(props) {
  return(
    <div className="stuff-todo">
    {props.stufftodo.map(stuff =>{
      return <Todo item={stuff} toggleItem={props.toggleItem} />;
    })}
    </div>
  );
}





