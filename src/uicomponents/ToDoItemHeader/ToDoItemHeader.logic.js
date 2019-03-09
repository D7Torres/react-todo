import React from "react";
import classnames from "classnames";
import { todosAttributes } from "../../models/todosAttributes";
import Checkbox from "@material-ui/core/Checkbox";
import { FaTrashAlt } from "react-icons/fa";
import css from "./ToDoItemHeader.module.css";

const ToDoItemHeader = ({ id, label, isDone, onChange, deleteTodo }) => {
  const labelClass = classnames({ [css.isDone]: isDone });
  const { IS_DONE } = todosAttributes;

  return (
    <div className={css.header}>
      <div>
        <Checkbox
          color="primary"
          checked={isDone}
          onChange={() => onChange(IS_DONE)}
          className={css.checkbox}
        />
        <label className={labelClass}>{label}</label>
      </div>
      <FaTrashAlt className={css.deleteIcon} onClick={() => deleteTodo(id)} />
    </div>
  );
};

export { ToDoItemHeader };
