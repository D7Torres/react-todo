import React from 'react'
import PropTypes from 'prop-types'
import { ToDoListPresentation, ToDoListItem } from './ToDoList.presentation'
import { ToDoItem } from '../ToDoItem'

const propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        isDone: PropTypes.bool,
        label: PropTypes.string,
    })),
}

const defaultProps = {
    todos: [],
}

const ToDoList = ({ todos }) => {
    const renderedTodos = todos.map((todoObj) => {
        const todo = <ToDoItem
            isDone={todoObj.isDone}
            label={todoObj.label}
        />

        return <ToDoListItem todo={todo}/>
    })

    return (
        <ToDoListPresentation
            renderedTodos={renderedTodos}
        />
    )
}

ToDoList.PropTypes = propTypes
ToDoList.defaultProps = defaultProps

export {
    ToDoList,
}
