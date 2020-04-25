// JS não suporta nativamente tag's HMTML | React utiliza JSX para transpilar código HTML

import React from 'react' // Core do framework | Obrigatório quando há JSX
import ReactDOM from 'react-dom' // Conversa com a página

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        {/* Como passar componentes filhos diretamente na tag Pai */}
        <Pai nome="Paulo" sobrenome="Silva">

            <Filho nome="Pedro"/>
            <Filho nome="Paula" sobrenome="Silva" />
            <Filho nome="Carla" />

        </Pai>
    </div>
    , document.getElementById('root'))



// import Saudacao from './components/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Frase" nome="padrão..."/>
//     </div>
//     , document.getElementById('root'))


// import Multi, { BoaNoite } from './components/Multiplos'

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Guilherme" />
//         <BoaNoite nome="Bia" />
//     </div>
//     , document.getElementById('root')) // Pega elemento de id root e joga h1 dentro
