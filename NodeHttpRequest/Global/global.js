console.log(global)

//tomar cuidado quando for mexer no modo globl porque vai acabar mexendo em tudo e pode causar problemas
//o sistema de módulos do node serve pra resolver esse problema de mexer direto on global

//exp:
global.MyApp = { //qualquer arquivo do sistema terá acesso à esse "MyApp"
    saudation(){
        return "Olá, estou aqui"
    },
    name: "My system"
}

//qualquer um que importar usando 'require("./global")' vai conseguir acessar e alterar os atributos do "MyApp"
//é possível usar o Object.freeze pra não permitir fazer alterações no objeto