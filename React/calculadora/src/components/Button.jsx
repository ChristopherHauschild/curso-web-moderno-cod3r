import React from 'react'
import './Button.css'

export default props => {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            /* Recebe conteúdo do botão clicado */
            /* Realizar confirmação antes de chamar função */
            onClick={e => props.click && props.click(props.label)} 
            className={classes}>
            {props.label}
        </button>
    )
}



// Dentro de Template String é possível utilizar JS puro

// Se determinada propriedade estar definida no botão, ele assume as características da mesma */ }

/* Exibição condicional de classe

    <button className={`
        button
        // ${props.operation ? 'operation' : ''}
        // ${props.double ? 'double' : ''}
        // ${props.triple ? 'triple' : ''}

    `}>

*/