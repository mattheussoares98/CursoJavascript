import React, { Component } from "react";
import Main from "../templates/Main";
import axios from "axios";

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Inserir, listar, alterar e excluir"
}

const baseUrl = "http://localhost:3001/users"
const initialState = {
    user: { name: "", email: "" },
    list: [],
}

export default class User extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
        /* vai limpar somente o usuário */
    }

    save() {
        const user = this.state.user
        const method = user.id ? "put" : "post"
        /* todos números inteiros (inclusive negativos) retornam true. Somente zero vai retornar false  */
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            /* axios[method] = função     (url, user) = parâmetros da função */
            .then(resp => {
                /* resp.data = usuário obtido após o put ou post */
                const list = this.getUpdatedList(resp.data, true)
                this.setState({ user: initialState.user, list })
                /* vai apagar os dados do usuário pra iniciar o formulário novamente e atualizar a lista */
            })
    }

    getUpdatedList(user, add) {
        const list = this.state.list.filter(u => user.id !== u.id)
       if(add) list.push(user)
        return list
    }

    updateField(event) {
        /* o ideal é não alterar o state diretamente
        O ideal é fazer um clone desse state e depois alterar ele pelo setState */
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    componentDidMount() {
        const list = axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
        console.log(list)
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios(`${baseUrl}/${user.id}`)
            .then(resp => {
                console.log(`dado retornado no resp do axios ${resp.data} `)
                const list = this.getUpdatedList(user, false)
                this.setState({ list })
                // this.setState({ /* list */})
            })
    }

    renderTable() {
        const element = (
            <table className="table mt-4">
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>)
        return element

    }

    renderRows() {
        const element = this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}
                        >
                            <i className="fa fa-trash">
                            </i>
                        </button>
                    </td>
                </tr>
            )
        })
        return element

    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o email"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>)
    }


    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>

        )
    }
}