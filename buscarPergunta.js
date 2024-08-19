let {flashcards} = require('./data')

function buscarPergunta(prompt, callback){
    let per = prompt('Digite a pergunta do flashcard: ').toLowerCase()
    let index = flashcards.findIndex(flashcard => flashcard.pergunta === per)
    if(index == -1){
        console.log('Pergunta não encontrada')
        callback()
    }else{
        console.log(flashcards[index])
        callback()
    }
}

module.exports = buscarPergunta