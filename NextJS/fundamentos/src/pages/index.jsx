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
        <Navegador cor="blue" titulo="Estiloso" destino="Estiloso"></Navegador>
        <Navegador cor="orange" titulo="Readme" destino="Readme"></Navegador>
        <Navegador cor="red" titulo="Cabecalho" destino="CabecalhoExemplo"></Navegador>
        <Navegador cor="green" titulo="Navegação simples exemplo #01" destino="/navegacao"></Navegador>
        <Navegador cor="grey" titulo="Navegação dinâmica exemplo #02" destino="/cliente/qualquer parâmetro/qualquer parâmetro2"></Navegador>
        <Navegador cor="yellow" titulo="Componente com estado" destino="estado"></Navegador>
        <Navegador cor="pink" titulo="Integração 1" destino="Integracao_1"></Navegador>
      </div>
    </>
  )
}