import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import "./App.css";
import { ToDosChart } from "./uicomponents/ToDosChart";
import { ToDoList } from "./uicomponents/ToDoList";
import { ToDosContext } from "./contexts/ToDosContext";
import { todosAttributes } from "./models/todosAttributes";

class App extends Component {
  state = {
    todos: {
      "1": {
        id: "1",
        label: "My todo 1",
        isDone: true,
        urgency: 1,
        importance: 2
      },
      "2": {
        id: "2",
        label: "My todo 2",
        isDone: false,
        urgency: 3,
        importance: 0
      },
      "3": {
        id: "3",
        label: "My todo 3",
        isDone: true,
        urgency: 4,
        importance: 5
      }
    }
  };

  deleteTodo = id => {
    const { todos } = this.state;
    const newTodos = Object.assign({}, todos);
    delete newTodos[id];

    this.setState({
      todos: newTodos
    });
  };

  createTodo = () => {
    const { todos } = this.state;
    const newTodos = Object.assign({}, todos);
    const todoId = uuidv1();
    newTodos[todoId] = {
      id: todoId,
      label: "New ToDo",
      isDone: false,
      urgency: 0,
      importance: 0
    };

    this.setState({
      todos: newTodos
    });
  };

  changeTodo = (todoId, attribute, value) => {
    const { IS_DONE, IMPORTANCE, URGENCY, LABEL } = todosAttributes;
    const newTodo = {
      ...this.state.todos[todoId]
    };

    switch (attribute) {
      case LABEL:
        newTodo.label = value;
        break;

      case IS_DONE:
        newTodo.isDone = !newTodo.isDone;
        break;

      case IMPORTANCE:
        newTodo.importance = value;
        break;

      case URGENCY:
        newTodo.urgency = value;
        break;

      default:
    }

    this.setState({
      todos: {
        ...this.state.todos,
        [todoId]: newTodo
      }
    });
  };

  render() {
    const { todos } = this.state;
    const { deleteTodo, changeTodo, createTodo } = this;

    return (
      <div className="App">
        <ToDosContext.Provider
          value={{
            todos,
            deleteTodo,
            changeTodo,
            createTodo
          }}
        >
          <ToDosChart />
          <ToDoList />
        </ToDosContext.Provider>
      </div>
    );
  }
}

export default App;
