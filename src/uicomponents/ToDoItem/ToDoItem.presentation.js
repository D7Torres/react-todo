import React, { Fragment } from "react";
import { ToDoItemHeader } from "../ToDoItemHeader";
import { ToDoItemContent } from "../ToDoItemContent";

const ToDoItemPresentation = ({
  id,
  label,
  isDone,
  importance,
  urgency,
  onChange,
  deleteTodo
}) => (
  <Fragment>
    <ToDoItemHeader
      id={id}
      label={label}
      isDone={isDone}
      onChange={onChange}
      deleteTodo={deleteTodo}
    />
    <ToDoItemContent
      importance={importance}
      urgency={urgency}
      onChange={onChange}
    />
  </Fragment>
);

export { ToDoItemPresentation };
