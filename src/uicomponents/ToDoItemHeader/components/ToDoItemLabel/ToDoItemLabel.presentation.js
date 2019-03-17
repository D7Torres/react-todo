import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import css from "./ToDoItemLabel.module.css";

const ToDoItemLabelPresentation = ({
  label,
  isCrossed,
  isEditEnabled,
  setIsEditEnabled
}) => {
  if (isEditEnabled) {
    return <TextField value={label} margin="normal" variant="outlined" />;
  }
  const labelClass = classnames({ [css.crossed]: isCrossed });

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
  setIsEditEnabled: PropTypes.func.isRequired
};

ToDoItemLabelPresentation.defaultProps = {
  label: "",
  isCrossed: false,
  isEditEnabled: false
};

export { ToDoItemLabelPresentation };
