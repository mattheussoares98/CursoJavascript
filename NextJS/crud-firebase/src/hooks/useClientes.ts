import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOrForm from "./usarTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()
    const {
        exibirFormulario,
        exibirTabela,
        formularioVisivel,
        tabelaVisivel,
    } = useTabelaOrForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    //altera o estado quando iniciar o componente
    useEffect(obterDados, [])

    function obterDados() {
        repo.obterDados().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    function alterarCliente(cliente: Cliente) {
        console.log("nome: " + cliente.nome)
        console.log("idade: " + cliente.idade)
        console.log("id: " + cliente.id)
        console.log(cliente)
        setCliente(cliente)
        exibirFormulario()
    }

    function excluirCliente(cliente: Cliente) {
        repo.excluir(cliente)
        obterDados()
    }


    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterDados()
    }

    return {
        salvarCliente,
        excluirCliente,
        alterarCliente,
        novoCliente,
        exibirTabela,
        cliente,
        clientes,
        tabelaVisivel,
    }
}