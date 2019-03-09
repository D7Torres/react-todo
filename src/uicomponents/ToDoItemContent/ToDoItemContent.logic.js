import React from "react";
import { todosAttributes } from "../../models/todosAttributes";
import Slider from "@material-ui/lab/Slider";
import css from "./ToDoItemContent.module.css";

const renderAttribute = (label, value, attribute, onChange) => (
  <div class={css.attribute}>
    <label>{label}</label>
    <span className={css.slider}>
      <Slider
        value={value}
        min={0}
        max={5}
        step={1}
        onChange={(_event, value) => onChange(attribute, value)}
      />
    </span>
  </div>
);

const ToDoItemContent = ({ importance, urgency, onChange }) => {
  const { IMPORTANCE, URGENCY } = todosAttributes;

  return (
    <div className={css.content}>
      {renderAttribute("Importance:", importance, IMPORTANCE, onChange)}
      {renderAttribute("Urgency:", urgency, URGENCY, onChange)}
    </div>
  );
};

export { ToDoItemContent };
