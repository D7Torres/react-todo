import React, { Fragment } from "react";
import classnames from "classnames";
import { todosAttributes } from "../../models/todosAttributes";
import Slider from "@material-ui/lab/Slider";
import css from "./ToDoItem.module.css";

const ToDoItemPresentation = ({
  id,
  label,
  isDone,
  importance,
  urgency,
  onChange,
  deleteTodo
}) => {
  const labelClass = classnames({ [css.isDone]: isDone });
  const { IS_DONE, IMPORTANCE, URGENCY } = todosAttributes;

  return (
    <Fragment>
      <input
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={() => onChange(IS_DONE)}
      />
      <span className={labelClass}>{label}</span>
      <i
        onClick={event =>
          deleteTodo(event.target.parentNode.querySelector("input").id)
        }
      >
        Delete
      </i>
      Importance:
      <Slider
        value={importance}
        min={0}
        max={5}
        step={1}
        onChange={(event, value) => onChange(IMPORTANCE, value)}
      />
      Urgency:
      <Slider
        value={urgency}
        min={0}
        max={5}
        step={1}
        onChange={(event, value) => onChange(URGENCY, value)}
      />
    </Fragment>
  );
};

export { ToDoItemPresentation };
