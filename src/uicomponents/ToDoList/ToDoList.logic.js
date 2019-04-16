import React, { Fragment } from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDosContext } from "../../contexts/ToDosContext";
import css from "./ToDoList.module.css";

const ToDoList = () => (
  <ToDosContext.Consumer>
    {({ todos }) => (
      <Fragment>
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
