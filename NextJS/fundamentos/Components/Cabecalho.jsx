//esse arquivo pode ser importado em outro local e ser usado entre tags, <Cabecalho/>

export default function Cabecalho(props) {
    //props.titulo = "xxx" 
    //não é possível alterar o valor do props por aqui. Só é possível alterar se for pelo estado dele
    return (
        <h1>
           {props.titulo}
        </h1>
    )
}