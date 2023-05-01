import React, { Component } from "react"

export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome,
    }

    constructor(props) {
        super(props)
    }

    setTipo(e) {
        console.log(e.target.value)
        this.setState({
            tipo: e.target.value,
        })
    }

    setNome(e) {
        console.log(e.target.value)
        this.setState({
            nome: e.target.value,
        })
    }

    render() {
        //this = objeto atual = classe Saudacao
        //this.props acessa as propriedades que foram passadas como componente de classe
        const { tipo, nome } = this.state

        return (
            < div >
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo/* parâmetro recebido pelo props */}
                    onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={e => this.setNome(e)} />
            </div >
        )
    }
}