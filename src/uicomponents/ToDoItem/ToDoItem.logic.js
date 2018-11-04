import React from 'react'
import { ToDoItemPresentation } from './ToDoItem.presentation'

class ToDoItem extends React.PureComponent {
    state = { isDone: this.props.isDone }

    onChangeHandler = () => {
        const isDone = this.state.isDone
        this.setState({ isDone: !isDone })
    }

    render() {
        const { label } = this.props
        const { isDone } = this.state

        return (
            <ToDoItemPresentation
                label={label}
                isDone={isDone}
                onChange={this.onChangeHandler}
            />
        )
    }
}

export {
    ToDoItem
}
