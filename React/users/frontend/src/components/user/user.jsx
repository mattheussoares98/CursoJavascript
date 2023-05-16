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
    lint: [],
}

export default class User extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
        /* vai limpar somente o usuário */
    }

    save() {
        
    }


    render() {
        return (
            <Main {...headerProps}></Main>

        )
    }
}