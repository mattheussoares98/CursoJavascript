import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Cliente from '@/core/Cliente'
import Tabela from '@/components/Tabela'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'

const inter = Inter({ subsets: ['latin'] })

const clientes = [
  new Cliente("Mattheus", 25, "1"),
  new Cliente("Soares", 25, "2"),
  new Cliente("Barbosa", 25, "3")
]

function alterarCliente(cliente: Cliente) {
  console.log("editar: " + cliente.nome)
}

function excluirCliente(cliente: Cliente) {
  console.log("excluir: " + cliente.nome)
}

export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-950  to-blue-300
    text-white
    `}>
      <Layout titulo="Cadastro simples">
        <div className='flex justify-end'>
          <Botao className={`mb-4`} cor='green' >Novo cliente</Botao>
        </div>
        <span>
          {/* <Tabela clientes={clientes}
            alterarCliente={alterarCliente}
            excluirCliente={excluirCliente}
          ></Tabela> */}

          <Formulario></Formulario>
        </span>
      </Layout>
    </div>
  )
}
