import React, {Component} from "react";
import Main from "../templates/Main";


const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Inserir, listar, alterar e excluir"
}

export default class User extends Component {
    render(){
        return (
            <Main {...headerProps}></Main>
            
        )
    }
}