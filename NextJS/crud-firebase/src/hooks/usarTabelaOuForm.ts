import { useState } from "react";

export default function usarTabelaOuForm() {
    const [visivel, setVisivel] = useState<"form" | "table">("table")

    function exibirTabela() {
        setVisivel("table")
    }
    function exibirFormulario() {
        setVisivel("form")
    }

    return {
        formularioVisivel: visivel === "form",
        tabelaVisivel: visivel === "table",
        exibirFormulario,
        exibirTabela,
    }
}