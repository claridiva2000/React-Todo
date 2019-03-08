import React, { Component } from "react";


export default class TodoForm extends Component {
  constructor(props){
    super(props);

  }

render() {
  return(
   
    <form onSubmit={this.props.addItemHandler}>
      <div>
      </div>
      <input 
      type="text"
      placeholder="Task"
      value={this.props.item}
      name="item"
      onChange={this.props.inputHandler}
      />
    <button type="submit">Add To List</button>
    </form>
    
   );
  }
}
  