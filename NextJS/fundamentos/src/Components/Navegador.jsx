import styles from "../styles/Navegador.module.css"
import Link from "next/link"

export default function Navegador(props) {
    return (
        <Link href={props.destino}>
            <div style={{
                backgroundColor: props.cor,
            }} className={styles.navegador}>
                {props.titulo}
            </div>
        </Link>
    )
}