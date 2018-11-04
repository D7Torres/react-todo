import React, { Fragment } from 'react'
import css from './ToDoItem.module.css'
import classnames from 'classnames'

const ToDoItemPresentation = ({ label, isDone, onChange }) => {
    const labelClass = classnames({ [css.isDone]: isDone })

    return (
        <Fragment>
            <input type="checkbox" checked={isDone} onChange={onChange} />
            <span className={labelClass}>{label}</span>
        </Fragment>
    )
}

export {
    ToDoItemPresentation
}
