let {baralhos, flashcards} = require('../data')
const listarBaralhos = require('./listarBaralhos')

function deletarBaralho(prompt, callback){
    if(baralhos.length === 0){
        console.log('Não a Baralhos Cadastrados')
        callback()
    }else{
        listarBaralhos()
        let id = parseInt(prompt('Digite o ID: '))
        let index = baralhos.findIndex(baralho => baralho.id === id)
        if(index === -1){
            console.log('ID não encontrado')
            callback()
        }else{
            baralhos.splice(index, 1)
            for(let i=flashcards.length -1;i >= 0; i--){
                if(flashcards[i].idBaralho === id){
                    flashcards.splice(i, 1)
                }
            }
            console.log('Deletado com Sucesso')
            callback()
        }    
    }
}

module.exports = deletarBaralho