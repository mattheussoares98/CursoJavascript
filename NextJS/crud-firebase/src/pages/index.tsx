import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Cliente from '@/core/Cliente'
import Tabela from '@/components/Tabela'

const inter = Inter({ subsets: ['latin'] })

const clientes = [
  new Cliente("Mattheus", 25, "1"),
  new Cliente("Soares", 25, "2"),
  new Cliente("Barbosa", 25, "3")
]

export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-950  via-purple-700 to-blue-300
    text-white
    `}>
      <Layout titulo="Cadastro simples">
        <span>
          <Tabela clientes={clientes}></Tabela>
        </span>
      </Layout>
    </div>
  )
}
