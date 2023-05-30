//arquivo para mostrar o que é possível fazer
export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return <div>
        {titulo}
        {subtitulo()}
        {console.log("teste")}
        <p>
            {
                JSON.stringify({nome: "Mattheus", idade: "25"})
            }
        </p>
    </div>
}