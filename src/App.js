import React, { Component } from "react";
import "./App.css";
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
        urgency: 0,
        importance: 0
      },
      "2": {
        id: "2",
        label: "My todo 2",
        isDone: false,
        urgency: 0,
        importance: 0
      },
      "3": {
        id: "3",
        label: "My todo 3",
        isDone: true,
        urgency: 0,
        importance: 0
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

  changeTodo = (todoId, attribute, value) => {
    const { IS_DONE, IMPORTANCE, URGENCY } = todosAttributes;
    const newTodo = {
      ...this.state.todos[todoId]
    };

    switch (attribute) {
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
    const { deleteTodo, changeTodo } = this;

    return (
      <div className="App">
        <ToDosContext.Provider
          value={{
            todos,
            deleteTodo,
            changeTodo
          }}
        >
          <ToDoList />
        </ToDosContext.Provider>
      </div>
    );
  }
}

export default App;
