import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoItem } from './uicomponents/ToDoItem'

class App extends Component {
  render() {
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
          <ToDoItem
            label="My first ToDo"
            isDone
          />
        </header>
      </div>
    );
  }
}

export default App;
