import React from "react"

export const BoaTarde = props =>
    <h1>Boa tarde {props.nome}</h1>

export const BoaNoite = props =>
    <h1>Boa noite {props.nome}</h1>

// export default BoaTarde
//possível exportar sozinho e como default

export default {BoaTarde, BoaNoite}
//possível exportar as duas funções no default
