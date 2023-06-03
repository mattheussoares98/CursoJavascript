import Link from "next/link"
import Navegador from "@/Components/Navegador"
export default function Teste() {
  return (
    <>
      Para saber melhor como funciona o jsx, leia o arquivo 'readme' que está em fundamentos/src/pages
      <br />
      <br />
      <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: "10px",
            borderRadius: 10,
            padding: "10px",
            height: "100vh"
      }}>
        <Navegador cor="blue" titulo="Estiloso"></Navegador>
        <Navegador cor="orange" titulo="Readme"></Navegador>
        <Navegador cor="red" titulo="CabecalhoExemplo"></Navegador>
      </div>
    </>
  )
}