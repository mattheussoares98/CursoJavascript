import React from "react";
import Filho from "./filho";

export default props => <div>
    <h1>
        {props.nome} {props.sobrenome}
    </h1>
    <h2>Filhos</h2>
    {/* <ul> */}
    {/* <Filho nome="PrimeiroFilho" sobrenome={props.sobrenome}></Filho> */}
    {/* <Filho {...props}></Filho>  */}
    {/*todas propriedades do pai serão herdadas pro filho */}
    {/* <Filho {...props} nome="Carla"></Filho>  */}
    {/* herda os props do pai mas dps altera o nome pra "Carla" */}
    {/* </ul> */}

    <ul>
        {/* {props.children} */}
        {/* dessa forma pode adicionar novos elementos dentro da TAG do "pai" que serão exibidos */}
        {React.cloneElement(props.children, { ...props })} {/* dessa forma só pode passar um elemento dentro da TAG "pai" */}
        
    </ul>
</div>