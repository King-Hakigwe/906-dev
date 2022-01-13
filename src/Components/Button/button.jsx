import React from 'react'
import { NavLink } from 'react-router-dom'


const Button = (props) => {
    return (
        <div>
            <NavLink onClick={props.onclick} to='#' className={props.classes}>{props.suggest}</NavLink>
        </div>
    )
}


export default Button
