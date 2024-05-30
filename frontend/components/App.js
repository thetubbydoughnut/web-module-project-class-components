import React from 'react';
import Form from './Form';
import ToDo from './Todo';
import TodoList from './TodoList';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  updateTodoList = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      todos: [...prevState.todos, { id: Date.now(), text: this.state.toDo, completed: false}]
    }));
  }

  handleInputChange = (e) => {
    this.setState({ toDo: e.target.value})
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <ToDo id={Date.now}/>
        <Form updateTodoList={this.updateTodoList} handleInputChange={this.handleInputChange}/>
      </div>
    )
  }
}
