import Link from "next/link"
import Estiloso from "./Estiloso"
export default function Teste() {
  return (
    <>
      Para saber melhor como funciona o jsx, leia o arquivo 'readme' que está em fundamentos/src/pages
      <br />
      <br />
      <Link href="Estiloso">Navegar para estiloso</Link>
    </>
  )
}