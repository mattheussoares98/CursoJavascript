import Cabecalho from "@/Components/Cabecalho";
import Layout from "@/Components/Layout";

export default function CabecalhoExemplo() {
    return (

        <Layout titulo="Cabecalho">
            <Cabecalho titulo="Título por parâmetro 1º"></Cabecalho>
            <Cabecalho titulo="Título por parâmetro 2º"></Cabecalho>
            <Cabecalho titulo="Título por parâmetro 3º"></Cabecalho>
        </Layout>
    )
}