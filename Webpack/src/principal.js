import Pessoa from "./pessoa"
//só funciona o webpack se tiver o import aqui, ou a partir de algum import
//consiga ter acesso ao arquivo que quer usar
import "./assets" //quando fica assim, ele procura um arquivo chamado "index.js" para carregar as informações
// import "./assets/css/estilo.css" //removi esse import daqui porque no "./assets" possui um arquivo "index.js" que já possui esse import, então não precisa usar aqui também

const atendente = new Pessoa
console.log(atendente.cumprimentar())