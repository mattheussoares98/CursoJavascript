import React from "react"

export default props =>
    <div>
        <h1>Bom dia {props.nome}</h1>
        <h2>Tudo bem?</h2>
    </div>


// export default props =>
// [

//     <h1>Bom dia {props.nome}</h1>
// ]

// export default fragment =>
//     //dessa forma não precisa envolver as tags com outra tag
//     <React.Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Tudo bem?</h2>
//     </React.Fragment>

