import "./Main.css"
import React from "react"
import Header from "./Header"


export default props =>
    <React.Fragment>
        {/* quando cria envolvendo dessa forma acima, não vai envolver os elementos dentro de uma DIV */}
        <Header>
            <main className="content">
                Conteúdo
            </main>
        </Header>
    </React.Fragment>
