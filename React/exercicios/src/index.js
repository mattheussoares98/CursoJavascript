import React from "react"
import ReactDOM from "react-dom"
import Primeiro from "./components/primeiro.jsx"
import BomDia from "./components/bomDia.jsx"
import { BoaTarde, BoaNoite } from "./components/multiplos.jsx"
import Saudacao from "./components/saudacao.jsx"
import Pai from "./components/pai.jsx"
import Filho from "./components/filho.jsx"

//renderiza o primeiro elemento dentro da página
// ReactDOM.render(<h1>React</h1>, document.getElementById("root"))
//vai inserir "react" na página

// ReactDOM.render(<BomDia nome = "Mattheus"/>, document.getElementById("root"))

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Mattheus"></BoaTarde>
//         <BoaNoite nome="Soares"></BoaNoite>
//     </div>
//     , document.getElementById("root"))

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="Mattheus"></Saudacao>
//     </div>
//     , document.getElementById("root"))

ReactDOM.render(
    <div>
        <Pai nome="Mattheus" sobrenome="Soares Barbosa">
            <Filho nome="Bia" sobrenome="Silva"></Filho>
            {/* <Filho nome="Silvia" sobrenome="Fontes"></Filho>
            <Filho nome="Ana" sobrenome="Santos"></Filho> */}
        </Pai>
    </div>
    , document.getElementById("root"))


