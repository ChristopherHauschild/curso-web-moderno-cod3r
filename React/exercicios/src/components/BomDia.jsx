import React from 'react'

// A priori não é possível retornar elementos JSX adjacentes

// React.Fragment -> serve como uma tag que encapsula elementos JSX adjacentes
// [] -> encapsula elementos JSX adjacentes | Última opção
// div -> encapsula elementos JSX adjacentes


export default props => [ // props -> convenção utilizada como parâmetro padrão

    // key -> para facilitar identificação do elemento
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>