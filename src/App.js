import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import "./components/TodoComponents/Todo.css"

const stufftodo= [
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


class App extends React.Component {
  constructor(){
    super();

    this.state = {
     stufftodo:stufftodo,
     item: ""
    };
    
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  inputHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  addItemHandler = event => {
    event.preventDefault();
    this.setState(prevState=> {
      return{
        stufftodo: [
          ...prevState.stufftodo,
          {
            completed: false,
            id: Date.now(),
            task: prevState.item
          }
        ],
        item: ""
      };
    });
  };

  toggleItem = itemId => {
    this.setState(prevState => {
      return {
        stufftodo: prevState.stufftodo.map(stuff => {
          if (stuff.id === itemId) {
            return{
              task: stuff.task,
              id: stuff.id,
              completed: !stuff.completed
            };
          }else{
            return stuff;
          }
        })
      };
    });
  };

clearDone = () => {
  this.setState(prevState =>{
    return {
      stufftodo: prevState.stufftodo.filter(stuff =>{
        return !stuff.completed;
      })
    };
  });
};


  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>My Todos</h1>
        </div>
        <TodoForm item={this.state.item}
                  inputHandler={this.inputHandler} 
                  addItemHandler={this.addItemHandler} 
        />
        <TodoList stufftodo={this.state.stufftodo}
                  toggleItem={this.toggleItem}
        />
        
        <button onClick={this.clearDone}>Clear Finished Tasks</button>

      </div>
    );
  }
}

export default App;
