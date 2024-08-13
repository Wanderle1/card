let {baralhos} = require('../data')
const listarBaralhos = require('./listarBaralhos')

function atualizarBaralho(prompt, callback){
    if(baralhos.length == 0){
        console.log('Não a Baralhos Cadastrados')
        callback()

    }else{
        listarBaralhos()
        let opcao = parseInt(prompt('Digite o ID: '))
        let index = baralhos.findIndex(baralho => baralho.id === opcao)
        if(index == -1){
            console.log('Id não encontrado')
            callback()
        }else{
            let newNome = prompt('Digite um novo nome: ')
            baralhos[index].nome =newNome
            console.log('Atualizado com Sucesso')
            callback()
        }
    }
}

module.exports = atualizarBaralho