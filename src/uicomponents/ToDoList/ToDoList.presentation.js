import React from 'react'
import PropTypes from 'prop-types'
import css from './ToDoList.module.css'

const propTypes = {
    renderedTodos: PropTypes.arrayOf(
        PropTypes.node,
    ),
}

const defaultProps = {
    renderedTodos: [],
}

const ToDoListItem = ({ todo }) => (
    <li>
        {todo}
    </li>
)

const ToDoListPresentation = ({ renderedTodos }) => (
    <ul>
        {renderedTodos}
    </ul>
)

ToDoListPresentation.propTypes = propTypes
ToDoListPresentation.defaultProps = defaultProps

export {
    ToDoListPresentation,
    ToDoListItem,
}
