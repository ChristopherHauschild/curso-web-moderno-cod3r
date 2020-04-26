import './Header.css'
import React from 'react'

export default props =>
// d-none && d-sm-flex -> para celular não irá aparecer e em demais telas será flex
<header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3"> 
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p className="lead text-muted"> {props.subtitle} </p>
</header>

// props foram definidas em App.jsx e importadas a partir do header no Main.jsx