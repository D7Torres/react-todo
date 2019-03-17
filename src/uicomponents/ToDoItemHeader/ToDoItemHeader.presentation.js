import React from "react";
import { todosAttributes } from "../../models/todosAttributes";
import Checkbox from "@material-ui/core/Checkbox";
import { FaTrashAlt } from "react-icons/fa";
import css from "./ToDoItemHeader.module.css";
import { ToDoItemLabel } from "./components/ToDoItemLabel/ToDoItemLabel.logic";

const ToDoItemHeaderPresentation = ({
  id,
  label,
  isDone,
  onChange,
  deleteTodo
}) => {
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
        <ToDoItemLabel todoId={id} label={label} isCrossed={isDone} />
      </div>
      <FaTrashAlt className={css.deleteIcon} onClick={() => deleteTodo(id)} />
    </div>
  );
};

export { ToDoItemHeaderPresentation };
