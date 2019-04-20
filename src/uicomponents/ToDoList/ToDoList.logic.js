import React from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDosContext } from "../../contexts/ToDosContext";
import { FaPlusCircle } from "react-icons/fa";
import css from "./ToDoList.module.css";

const ToDoList = () => (
  <ToDosContext.Consumer>
    {({ todos }) => {
      if (Object.entries(todos).length === 0) {
        return (
          <div className={css.noToDosMessage}>
            <p>Lucky you! Nothing to do</p>
            <p>
              Click <FaPlusCircle className={css.noToDosMessageIcon} /> to add a
              To-Do
            </p>
          </div>
        );
      }

      return (
        <ul className={css.todoList}>
          {Object.values(todos).map(todo => (
            <li key={todo.id} className={css.todo}>
              <ToDoItem todo={todo} />
            </li>
          ))}
        </ul>
      );
    }}
  </ToDosContext.Consumer>
);

export { ToDoList };
