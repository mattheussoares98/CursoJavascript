interface BotaoProps {
    cor?: "green" | "blue" | "gray"
    /* quando coloca dessa forma acima, só deixa colocar essas 3 opções no parâmetro */
    className?: string
    children: any
}
export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? "gray"
    return (
        <button className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4 py-2 rounded-md
         ${props.className} 
         /* se houver outra propridade passada como className, vai sobresrever o className escrito acima */
        `}>
            {props.children}
        </button>
    )
}