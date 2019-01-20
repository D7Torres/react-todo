import React, { Fragment } from 'react'
import classnames from 'classnames'
import Slider from '@material-ui/lab/Slider';
import css from './ToDoItem.module.css'

const ToDoItemPresentation = ({
    id,
    label,
    isDone,
    importance,
    importanceOnChange,
    urgency,
    urgencyOnChange,
    onChange,
    deleteTodo,
}) => {
    const labelClass = classnames({ [css.isDone]: isDone })

    return (
        <Fragment>
            <input id={id} type="checkbox" checked={isDone} onChange={onChange} />
            <span className={labelClass}>{label}</span>
            <i onClick={(event) => deleteTodo(event.target.parentNode.querySelector('input').id)}>Borrar</i>
            Importance:
            <Slider
                value={importance}
                min={0}
                max={5}
                step={1}
                onChange={importanceOnChange}
            />
            Urgency:
            <Slider
                value={urgency}
                min={0}
                max={5}
                step={1}
                onChange={urgencyOnChange}
            />
        </Fragment>
    )
}

export {
    ToDoItemPresentation
}
