let {flashcards} = require('../data')
const listarFlashCards = require('./listarFlashCards')

function excluirFlashCards(prompt, callback){
    if(flashcards.length == 0){
        console.log('Não a flashcards Cadastrados')
        callback()
    }else{
        listarFlashCards()
        let id = parseInt(prompt('Digite o ID: '))
        let index = flashcards.findIndex(flashcard => flashcard.id === id)
        if(index == -1){
            console.log('ID não encontrado')
            callback()
        }else{
            flashcards.splice(index, 1)
            console.log('Deletado com Sucesso')
            callback()
        }    
    }
}

module.exports = excluirFlashCards