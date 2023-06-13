import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeRemocao } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    excluirCliente?: (cliente: Cliente) => void
    alterarCliente?: (cliente: Cliente) => void
}


export default function Tabela(props: TabelaProps) {
    function renderHead() {
        return (
            <thead className={`
            bg-gradient-to-r from-purple-950 to-blue-700
            text-gray-100 
            `}>
                <tr>
                    <th className="text-left p-4" >Código</th>
                    <th className="text-left p-4" >Nome</th>
                    <th className="text-left p-4" >Idade</th>
                    {
                        props.alterarCliente || props.excluirCliente ?
                            (
                                <th className="text-left p-4" >Ações</th>
                            )
                            : false
                    }
                </tr>
            </thead>
        )
    }

    function renderActions(cliente: Cliente) {
        return (
            <td className={`flex`}>
                {
                    props.alterarCliente ? (

                        <button className={`
                        flex justify-center items-center text-green-600 
                        rounded-full hover:bg-purple-50 p-2 m-1
                        `}
                            onClick={e => props.alterarCliente?.(cliente)}
                        >
                            {IconeEdicao}
                        </button>
                    ) : false
                }

                {
                    props.excluirCliente ? (

                        <button className={`
                        flex justify-center items-center text-red-600 
                        rounded-full hover:bg-purple-50 p-2 m-1
                        `}
                            onClick={e => props.excluirCliente?.(cliente)}
                        >
                            {IconeRemocao}
                        </button>
                    ) : false
                }
            </td>
        )
    }

    function renderData() {
        return props.clientes?.map((cliente, index) => {
            return (
                <tbody>
                    <tr key={cliente.id}
                        className={
                            `${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`
                        }>
                        <td className="text-left p-4" >{cliente.id}</td>
                        <td className="text-left p-4" >{cliente.nome}</td>
                        <td className="text-left p-4" >{cliente.idade}</td>
                        {renderActions(cliente)}
                    </tr>
                </tbody>
            )
        })
    }

    return (
        <table className={`
        w-full rounded-xl overflow-hidden
        `}>
            {renderHead()}
            {renderData()}
        </table>
    )
}