import React, { PureComponent } from "react";
import { ToDoItemHeaderPresentation } from "./ToDoItemHeader.presentation";

class ToDoItemHeader extends PureComponent {
  state = {
    isEditEnabled: false
  };

  setIsEditEnabled = value => {
    this.setState({ isEditEnabled: value });
  };

  render = () => {
    const { id, label, isDone, onChange, deleteTodo } = this.props;
    const { isEditEnabled } = this.state;

    return (
      <ToDoItemHeaderPresentation
        id={id}
        label={label}
        isDone={isDone}
        onChange={onChange}
        deleteTodo={deleteTodo}
        isEditEnabled={isEditEnabled}
        setIsEditEnabled={this.setIsEditEnabled}
      />
    );
  };
}

export { ToDoItemHeader };
