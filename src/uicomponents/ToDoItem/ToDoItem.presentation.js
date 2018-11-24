import React, { Fragment } from 'react'
import css from './ToDoItem.module.css'
import classnames from 'classnames'

const ToDoItemPresentation = ({ id, label, isDone, onChange, deleteTodo }) => {
    const labelClass = classnames({ [css.isDone]: isDone })

    return (
        <Fragment>
            <input id={id} type="checkbox" checked={isDone} onChange={onChange} />
            <span className={labelClass}>{label}</span>
            <i onClick={(event) => deleteTodo(event.target.parentNode.querySelector('input').id)}>Borrar</i>
        </Fragment>
    )
}

export {
    ToDoItemPresentation
}
