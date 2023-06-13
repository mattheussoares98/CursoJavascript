interface BotaoProps {
    cor?: "green" | "blue" | "gray"
    /* quando coloca dessa forma acima, só deixa colocar essas 3 opções no parâmetro */
    className?: string
    children: any
}
export default function Botao(props: BotaoProps) {
    const cor = `bg-${props.cor}-400`
    return (
        <button className={`${cor}
        text-white px-4 py-2 rounded-md
         ${props.className} 
        `}>
            {props.children}
        </button>
    )
}