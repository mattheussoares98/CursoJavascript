import Cliente from "@/core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}


export default function Tabela(props: TabelaProps) {
    function renderHead() {
        return (
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
        )
    }

    function renderData() {
        return props.clientes?.map((cliente, index) => {
            return (
                <tbody>
                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.idade}</td>
                    </tr>
                </tbody>
            )
        })
    }

    return (
        <table>
            {renderHead()}
            {renderData()}
        </table>
    )
}