import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Cliente from '@/core/Cliente'
import Tabela from '@/components/Tabela'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '@/core/ClienteRepositorio'
import ColecaoCliente from '@/backend/db/ColecaoCliente'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente()

  const [visivel, setVisivel] = useState<"form" | "table">("table")
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  //altera o estado quando iniciar o componente
  useEffect(obterDados, [])

  function obterDados(){
    repo.obterDados().then(clientes => {
      setClientes(clientes)
      setVisivel("table")
    })
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel("form")
  }

  function alterarCliente(cliente: Cliente) {
    console.log("nome: " + cliente.nome)
    console.log("idade: " + cliente.idade)
    console.log("id: " + cliente.id)
    console.log(cliente)
    setCliente(cliente)
    setVisivel("form")
  }

  function excluirCliente(cliente: Cliente) {
    console.log("excluir: " + cliente.nome)
  }


  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterDados()
  }

  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-950  to-blue-300
    text-white
    `}>
      <Layout titulo="Cadastro simples">
        {visivel == "table" ? (
          <>
            <div className='flex justify-end'>
              <Botao className={`mb-4`} cor='blue' onClick={() => novoCliente()}>Novo cliente</Botao>
            </div>
            <Tabela clientes={[]}
              alterarCliente={alterarCliente}
              excluirCliente={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente}
            cancelar={() => setVisivel("table")}
            salvarCliente={salvarCliente}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}
