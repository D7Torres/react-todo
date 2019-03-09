import React, { Fragment } from "react";
import classnames from "classnames";
import { todosAttributes } from "../../models/todosAttributes";
import Slider from "@material-ui/lab/Slider";
import { FaTrashAlt } from "react-icons/fa";
import css from "./ToDoItem.module.css";

const renderSliders = (importance, urgency, onChange) => {
  const { IMPORTANCE, URGENCY } = todosAttributes;

  return (
    <div className={css.content}>
      <div class={css.attribute}>
        <label>Importance:</label>
        <span className={css.slider}>
          <Slider
            value={importance}
            min={0}
            max={5}
            step={1}
            onChange={(event, value) => onChange(IMPORTANCE, value)}
          />
        </span>
      </div>
      <div class={css.attribute}>
        <label>Urgency:</label>
        <span className={css.slider}>
          <Slider
            value={urgency}
            min={0}
            max={5}
            step={1}
            onChange={(event, value) => onChange(URGENCY, value)}
          />
        </span>
      </div>
    </div>
  );
};

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
  const { IS_DONE } = todosAttributes;

  return (
    <Fragment>
      <div className={css.header}>
        <div>
          <input
            id={id}
            type="checkbox"
            checked={isDone}
            onChange={() => onChange(IS_DONE)}
          />
          <label className={labelClass}>{label}</label>
        </div>
        <FaTrashAlt className={css.deleteIcon} onClick={() => deleteTodo(id)} />
      </div>
      {renderSliders(importance, urgency, onChange)}
    </Fragment>
  );
};

export { ToDoItemPresentation };
