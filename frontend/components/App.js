import React from 'react';
import Form from './Form';
import ToDo from './Todo';
import TodoList from './TodoList';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      toDo: '',
      hideCompleted: false
    }
  }

  updateTodoList = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      todos: [...prevState.todos, { id: Date.now(), text: this.state.toDo, completed: false}],
      toDo: ''
    }));
  }

  handleInputChange = (e) => {
    this.setState({ toDo: e.target.value})
  }

  toggleComplete = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }));
  }

    toggleHideCompleted = () => {
      this.setState(prevState => ({
        hideCompleted: !prevState.hideCompleted
      }));
    }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <ToDo id={Date.now}/>
        <Form updateTodoList={this.updateTodoList} 
        handleInputChange={this.handleInputChange}
        inputValue={this.state.toDo}
        />
      </div>
    )
  }
}
