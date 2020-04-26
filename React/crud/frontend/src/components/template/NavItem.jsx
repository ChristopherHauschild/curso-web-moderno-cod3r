import React from 'react'
import './Nav'

import { Link } from 'react-router-dom'

export default props =>
    <Link to={`${props.link}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </Link>
