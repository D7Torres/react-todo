import React from 'react'
import PropTypes from 'prop-types'
import { ToDoListPresentation, ToDoListItem } from './ToDoList.presentation'
import { ToDoItem } from '../ToDoItem'

const propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
    })),
    deleteTodo: PropTypes.func.isRequired,
}

const defaultProps = {
    todos: [],
}

const ToDoList = ({ todos, deleteTodo }) => {
    const renderedTodos = todos.map((todoObj) => {
        const todo = <ToDoItem
            key={todoObj.id}
            id={todoObj.id}
            isDone={todoObj.isDone}
            label={todoObj.label}
            deleteTodo={deleteTodo}
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
