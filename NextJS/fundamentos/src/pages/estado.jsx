import Layout from "@/Components/Layout";
import { useState } from "react";

export default function ComponenteComEstado() {
    const [numero, funcao] = useState(0)

    function incrementar() {
        funcao(numero + 1)
    }

    return (
        <Layout titulo="Componente com estado">
            <div>
                {numero}

                <button onClick={incrementar} style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "10px",
                    border: "solid 1px blue",
                    margin: "20px",
                    height: "40px",
                }}>Incrementar</button>
            </div>
        </Layout>
    )

}