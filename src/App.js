import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import css from "./App.module.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Fab from "@material-ui/core/Fab";
import { FaPlus } from "react-icons/fa";
import SwipeableViews from "react-swipeable-views";
import { ToDosChart } from "./uicomponents/ToDosChart";
import { ToDoList } from "./uicomponents/ToDoList";
import { ToDosContext } from "./contexts/ToDosContext";
import { todosAttributes } from "./models/todosAttributes";

class App extends Component {
  state = {
    todos: {},
    tabValue: 0
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

  handleChangeTab = (_event, tabValue) => {
    this.setState({ tabValue });
  };

  handleChangeView = index => {
    this.setState({ tabValue: index });
  };

  render() {
    const { todos } = this.state;
    const { deleteTodo, changeTodo, createTodo } = this;

    return (
      <div className={css.app}>
        <Fab
          className={css.fab}
          color="primary"
          aria-label="New ToDo"
          onClick={createTodo}
        >
          <FaPlus />
        </Fab>
        <ToDosContext.Provider
          value={{
            todos,
            deleteTodo,
            changeTodo,
            createTodo
          }}
        >
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.tabValue}
              onChange={this.handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="To Dos" />
              <Tab label="Chart" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={this.state.tabValue}
            onChangeIndex={this.handleChangeView}
            enableMouseEvents
          >
            <div className={css.page}>
              <ToDoList />
            </div>
            <div className={css.page}>
              <ToDosChart />
            </div>
          </SwipeableViews>
        </ToDosContext.Provider>
      </div>
    );
  }
}

export default App;
