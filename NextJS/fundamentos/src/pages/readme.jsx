import Layout from "@/Components/Layout"

//O QUE É POSSÍVEL FAZER COM JSX
export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return <Layout titulo="JSX">
        {titulo}
        {subtitulo()}
        {console.log("teste")}
        {
            JSON.stringify({ nome: "Mattheus", idade: "25" })
        }
    </Layout>
}

//sobre o CSS, o globals.css é referenciado no _app.jsx. Portanto, é possível fazer novos imports no _app.jsx
//todos arquivos .jsx que são adicionados dentro da pasta "pages" ficam disponível pra acessar quando o site está em execução usando "/NomeDoArquivoSemAExtensão". Se rodar "npm run dev" vai iniciar o site na porta 3000, se colocar "localhost:3000/readme" que é o nome desse arquivo, vai conseguir visualizar no site o que tem dentro desse arquivo aqui