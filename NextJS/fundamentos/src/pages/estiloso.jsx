import styles from "./Estiloso.module.css"
import Link from "next/link"

export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando CSS módulos</h1>
            <br />
            <br />
            <Link href="/">Voltar</Link>
        </div>
    )
}