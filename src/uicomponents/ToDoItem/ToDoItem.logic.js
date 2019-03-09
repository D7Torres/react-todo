import React from "react";
import { ToDoItemPresentation } from "./ToDoItem.presentation";
import { todosAttributes } from "../../models/todosAttributes";
import { ToDosContext } from "../../contexts/ToDosContext";

class ToDoItem extends React.PureComponent {
  state = {
    isDone: this.props.todo.isDone,
    importance: this.props.todo.importance,
    urgency: this.props.todo.urgency
  };

  onChangeHandler = changeTodo => (attribute, value) => {
    const { IS_DONE, IMPORTANCE, URGENCY } = todosAttributes;
    const { id } = this.props.todo;
    switch (attribute) {
      case IS_DONE:
        const isDone = this.state.isDone;
        this.setState({ isDone: !isDone });
        break;

      case IMPORTANCE:
        this.setState({ importance: value });
        break;

      case URGENCY:
        this.setState({ urgency: value });
        break;

      default:
    }

    changeTodo(id, attribute, value);
  };

  render() {
    const {
      todo: { id, label, importance, urgency }
    } = this.props;
    const { isDone } = this.state;

    return (
      <ToDosContext.Consumer>
        {({ deleteTodo, changeTodo }) => (
          <ToDoItemPresentation
            id={id}
            label={label}
            isDone={isDone}
            importance={importance}
            urgency={urgency}
            onChange={this.onChangeHandler(changeTodo)}
            deleteTodo={deleteTodo}
          />
        )}
      </ToDosContext.Consumer>
    );
  }
}

export { ToDoItem };
