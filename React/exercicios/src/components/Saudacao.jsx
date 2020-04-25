// Componente de classe -> pode ter estado e ciclo de vida

import React, { Component } from 'react'

// state -> pode ser alterado | props -> não pode ser resultado

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo, // props -> valores passados como parametros
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        // Função setTipo sempre irá referenciar componente atual
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) { 
        this.setState({ tipo: e.target.value })
        // setState() -> altera estado
    }

    setNome(e) { 
        this.setState({ nome: e.target.value })
        // setState() -> altera estado
    }

    render() { // É preciso renderizar o componente
        const { tipo, nome } = this.state // Referenciando de dentro de state os atributos tipo e o nome
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="Tipo..."  // this pois função está no objeto
                    value={tipo} onChange={this.setTipo} /> 
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)} />
            </div> // onChange -> quando ocorre alguma mudança compoente chama função que altera o estado
        )
    }
}