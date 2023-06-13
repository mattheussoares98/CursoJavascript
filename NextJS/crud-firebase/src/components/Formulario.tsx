import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";

interface FormularioProps {
    cliente?: Cliente
}

export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {props.cliente?.id ? (
                <Entrada
                    titulo="ID"
                    tipo="text"
                    valor={props.cliente.id}
                    className="mb-4"
                    somenteLeitura
                ></Entrada>
            ) : false}
            <Entrada
                titulo="Nome"
                tipo="text"
                valor={nome}
                className="mb-4"
                valorMudou={setNome}
            ></Entrada>
            <Entrada
                titulo="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            ></Entrada>
        </div>
    )
}