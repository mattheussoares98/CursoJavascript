interface BotaoProps {
    cor?: "green" | "blue" | "gray" | "orange" | "yellow";
    /* quando coloca dessa forma acima, só deixa colocar essas 3 opções no parâmetro */
    className?: string;
    children: any;
    onClick?: () => void
}

const corClasses = {
    green: "bg-gradient-to-r from-green-400 to-green-900",
    blue: "bg-gradient-to-r from-blue-400 to-blue-900",
    gray: "bg-gradient-to-r from-gray-400 to-gray-900",
    orange: "bg-gradient-to-r from-orange-400 to-orange-900",
    yellow: "bg-gradient-to-r from-yellow-400 to-yellow-900",
};

export default function Botao(props: BotaoProps) {
    const cor = corClasses[props.cor ?? "gray"];
    return (
        <button
            className={`${cor} text-white px-4 py-2 rounded-md ${props.className}`}
            onClick={() => props.onClick?.()}
        >
            {props.children}
        </button>
    );
}