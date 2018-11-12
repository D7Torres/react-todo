import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoList } from './uicomponents/ToDoList'

class App extends Component {
  render() {
    const todos = [
      {
        label: 'My todo 1',
        isDone: true,
      },
      {
        label: 'My todo 2',
        isDone: false,
      },
      {
        label: 'My todo 3',
        isDone: true,
      },
    ]

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
          <ToDoList todos={todos}/>
        </header>
      </div>
    );
  }
}

export default App;
