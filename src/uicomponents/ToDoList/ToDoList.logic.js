import React from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDosContext } from "../../contexts/ToDosContext";

const ToDoList = () => (
  <ToDosContext.Consumer>
    {({ todos }) => (
      <ul>
        {Object.values(todos).map(todo => (
          <li>
            <ToDoItem todo={todo} />
          </li>
        ))}
      </ul>
    )}
  </ToDosContext.Consumer>
);

export { ToDoList };
