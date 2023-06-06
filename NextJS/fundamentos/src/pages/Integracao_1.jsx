import Layout from "@/Components/Layout";
import { useState } from "react";

export default function Integracao() {
    const [codigo, setCodigo] = useState(1)
    const [values, setValues] = useState({})

    async function getValues() {
        const response = await fetch(`http://localhost:3000/api/clientes?codigo=${codigo}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setValues(jsonData)
    }

    return (
        <Layout>
            <div >
                <span>
                    <input type="number" value={codigo} onChange={e => setCodigo(e.target.value++)} />
                    <button
                        onClick={e => getValues()}
                    >
                        Pesquisar
                    </button>
                    <ul style={{
                        padding: "20px"
                    }}>
                        <li>Código {values.codigo}</li>
                        <li>Nome {values.name}</li>
                        <li>E-mail {values.email}</li>
                    </ul>
                </span>
            </div>
        </Layout>
    )
}