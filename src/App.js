import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoList } from './uicomponents/ToDoList'

class App extends Component {
  state = {
    todos: [
      {
        id: '1',
        label: 'My todo 1',
        isDone: true,
      },
      {
        id: '2',
        label: 'My todo 2',
        isDone: false,
      },
      {
        id: '3',
        label: 'My todo 3',
        isDone: true,
      },
    ]
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newTodos,
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ToDoList
            todos={todos}
            deleteTodo={this.deleteTodo}
          />
        </header>
      </div>
    );
  }
}

export default App;
