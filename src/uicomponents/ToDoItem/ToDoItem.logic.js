import React from 'react'
import { ToDoItemPresentation } from './ToDoItem.presentation'

class ToDoItem extends React.PureComponent {
    state = { isDone: this.props.isDone }

    onChangeHandler = () => {
        const isDone = this.state.isDone
        this.setState({ isDone: !isDone })
    }

    render() {
        const { id, label, deleteTodo } = this.props
        const { isDone } = this.state

        return (
            <ToDoItemPresentation
                id={id}
                label={label}
                isDone={isDone}
                onChange={this.onChangeHandler}
                deleteTodo={deleteTodo}
            />
        )
    }
}

export {
    ToDoItem
}
