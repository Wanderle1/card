let {flashcards} = require('../data')
const listarFlashcards = require('./listarFlashCards')

function atualizarFlashcards(prompt, callback){
    if(flashcards.length == 0){
        console.log('Não a flashcards Cadastrados')
        callback()

    }else{
        listarFlashcards()
        let opcao = parseInt(prompt('Digite o ID: '))
        let index = flashcards.findIndex(flashcard => flashcard.id === opcao)
        if(index == -1){
            console.log('Id não encontrado')
            callback()
        }else{
            let newPergunta = prompt('Digite uma nova pergunta: ').toLowerCase()
            let newResposta = prompt('Digite uma nova resposta: ').toLowerCase()
            flashcards[index].pergunta =newPergunta
            flashcards[index].resposta =newResposta
            console.log('Atualizado com Sucesso')
            callback()
        }
    }
}

module.exports = atualizarFlashcards