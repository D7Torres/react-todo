import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToDoItemLabelPresentation } from "./ToDoItemLabel.presentation";

class ToDoItemLabel extends Component {
  state = {
    isEditEnabled: false
  };

  setIsEditEnabled = isEditEnabled => {
    this.setState({
      isEditEnabled: true
    });
  };

  render = () => {
    const { label, isCrossed } = this.props;
    const { isEditEnabled } = this.state;

    return (
      <ToDoItemLabelPresentation
        label={label}
        isCrossed={isCrossed}
        isEditEnabled={isEditEnabled}
        setIsEditEnabled={this.setIsEditEnabled}
      />
    );
  };
}

ToDoItemLabel.propTypes = {
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
