import Link from "next/link"
import styles from "../styles/Layout.module.css"

export default function Layout(props) {
    return (
        <div style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-between",
            flex: "center",
            
        }} className={styles.layout}>
            <div className={styles.cabecalho}>
                <div >{props.titulo ?? "Título"}</div>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}