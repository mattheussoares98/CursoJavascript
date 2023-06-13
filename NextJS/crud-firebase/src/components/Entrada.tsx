import Cliente from "@/core/Cliente"

interface EntradaProps {
    titulo: string
    tipo: "text" | "number"
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className} 
        `}>
            <label htmlFor="">{props.titulo}</label>
            <input
                className={`border rounded-lg px-4 py-2  
                border-purple-200 focus:bg-gray-100
                focus:border-purple-200 focus:outline-purple-300
                `}
                type={props.tipo}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                max={100}
                min={0}
                maxLength={70}
            />
        </div>
    )
}