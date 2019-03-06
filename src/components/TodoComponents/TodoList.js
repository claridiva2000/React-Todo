import React, { Component } from "react";
import Todo from "./Todo"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const tasks= [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class TodoList extends React.Component {
constructor(){
  super();
  this.state = {
    
    
  }
}



render() {
  return(
    <div>
      <h1>My Todo App</h1>
    <form>
      <input 
      task="task"
      value={this.state.task}
      placeholder="Task"
      />
      <button>Add Todo</button> <button>Clear Completed</button> 
    </form>


    </div>
  
  
  );
}







}

export default TodoList;