import React, { Fragment } from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDosContext } from "../../contexts/ToDosContext";
import Fab from "@material-ui/core/Fab";
import { FaPlus } from "react-icons/fa";
import css from "./ToDoList.module.css";

const ToDoList = () => (
  <ToDosContext.Consumer>
    {({ todos, createTodo }) => (
      <Fragment>
        <Fab color="primary" aria-label="New ToDo" onClick={createTodo}>
          <FaPlus />
        </Fab>
        <ul className={css.todoList}>
          {Object.values(todos).map(todo => (
            <li key={todo.id} className={css.todo}>
              <ToDoItem todo={todo} />
            </li>
          ))}
        </ul>
      </Fragment>
    )}
  </ToDosContext.Consumer>
);

export { ToDoList };
