import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToDoItemLabelPresentation } from "./ToDoItemLabel.presentation";
import { ToDosContext } from "../../../../contexts/ToDosContext";
import { todosAttributes } from "../../../../models/todosAttributes";

class ToDoItemLabel extends Component {
  state = {
    isEditEnabled: false
  };

  setIsEditEnabled = isEditEnabled => {
    this.setState({
      isEditEnabled
    });
  };

  onChangeHandler = (todoId, changeTodo) => event => {
    const { LABEL } = todosAttributes;

    changeTodo(todoId, LABEL, event.target.value);
  };

  render = () => {
    const { todoId, label, isCrossed } = this.props;
    const { isEditEnabled } = this.state;
    const { onChangeHandler } = this;

    return (
      <ToDosContext.Consumer>
        {({ changeTodo }) => (
          <ToDoItemLabelPresentation
            label={label}
            isCrossed={isCrossed}
            isEditEnabled={isEditEnabled}
            setIsEditEnabled={this.setIsEditEnabled}
            onChangeHandler={onChangeHandler(todoId, changeTodo)}
          />
        )}
      </ToDosContext.Consumer>
    );
  };
}

ToDoItemLabel.propTypes = {
  todoId: PropTypes.string.isRequired,
  label: PropTypes.string,
  isCrossed: PropTypes.bool,
  isEditEnabled: PropTypes.bool
};

ToDoItemLabel.defaultProps = {
  label: "",
  isCrossed: false,
  isEditEnabled: false
};

export { ToDoItemLabel };
