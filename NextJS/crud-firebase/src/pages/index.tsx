import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import useClientes from '@/hooks/useClientes'

export default function Home() {
  const {
    novoCliente,
    salvarCliente,
    alterarCliente,
    excluirCliente,
    exibirTabela,
    cliente,
    clientes,
    tabelaVisivel,
  } = useClientes()

  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-950  to-blue-300
    text-white
    `}>
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao className={`mb-4`} cor='blue' onClick={() => novoCliente()}>Novo cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              alterarCliente={alterarCliente}
              excluirCliente={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente}
            cancelar={exibirTabela}
            salvarCliente={salvarCliente}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}
