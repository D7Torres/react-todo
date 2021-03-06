import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import css from "./ToDoItemLabel.module.css";

const ToDoItemLabelPresentation = ({
  label,
  isCrossed,
  isEditEnabled,
  setIsEditEnabled,
  onChangeHandler
}) => {
  if (isEditEnabled) {
    return (
      <TextField
        value={label}
        margin="dense"
        variant="outlined"
        autoFocus
        onChange={onChangeHandler}
        onBlur={() => setIsEditEnabled(false)}
        className={css.textfield}
      />
    );
  }
  const labelClass = classnames(css.label, { [css.crossed]: isCrossed });

  return (
    <label className={labelClass} onClick={() => setIsEditEnabled(true)}>
      {label}
    </label>
  );
};

ToDoItemLabelPresentation.propTypes = {
  label: PropTypes.string,
  isCrossed: PropTypes.bool,
  isEditEnabled: PropTypes.bool,
  setIsEditEnabled: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

ToDoItemLabelPresentation.defaultProps = {
  label: "",
  isCrossed: false,
  isEditEnabled: false
};

export { ToDoItemLabelPresentation };
