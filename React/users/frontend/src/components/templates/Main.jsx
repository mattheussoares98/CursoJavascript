import "./Main.css"
import React from "react"
import Header from "./Header"


export default props =>
    <React.Fragment>
        {/* quando cria envolvendo dessa forma acima, não vai envolver os elementos dentro de uma DIV */}
        <Header {...props}> {/* dessa forma o Header vai receber os parâmetros que vierem do Main */}
        </Header>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
