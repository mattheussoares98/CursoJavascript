// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    if (req.method === "GET") {
        handlerGet(req, res)
    } else {
        // res.status(405).send();
        res.status(405).json({
            erro: `Método ${req.method} não suportado`
        })
    }
}

function handlerGet(req, res) {
    res.status(200).json({
        name: 'Mattheus Soares',
        metodo: req.method,
        email: "mattheus@testemail.com.brl",
        params: JSON.stringify(req.query),
        //esses params são os parâmetros que são enviados na requisição da URL com ?nomeDoParametro=resultadoDaPesquisa
        //exp de URL => http://localhost:3000/api/clientes?nome=mattheus&idade=25
        //retorno => {"name":"Mattheus Soares","metodo":"GET","email":"mattheus@testemail.com.brl","params":"{\"nome\":\"mattheus\",\"idade\":\"25\"}"}

        //outra forma de acessar, conforme abaixo
        nome: req.query.nome,
        idade: req.query.idade,
        codigo: req.query.codigo,
        //retorno => {"name":"Mattheus Soares","metodo":"GET","email":"mattheus@testemail.com.brl","params":"{\"nome\":\"mattheus\",\"idade\":\"25\"}","nome":"mattheus","idade":"25"}
    })
}
