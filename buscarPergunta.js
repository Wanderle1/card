let {flashcards} = require('./data')

function buscarPergunta(prompt, callback){
    let per = prompt('Digite a pergunta do flashcard: ').toLowerCase()
    let index = flashcards.findIndex(flashcard => flashcard.pergunta === per)
    if(index == -1){
        console.log('Pergunta não encontrada')
        callback()
    }else{
        const flashcardPergunta = flashcards.filter(flashcard => flashcard.pergunta === per)
        flashcardPergunta.forEach(flashcard => {
            console.log(`ID do flashcard: ${flashcard.id} Pergunta: ${flashcard.pergunta} Resposta: ${flashcard.resposta} id do Baralhos: ${flashcard.idBaralho}`)
        })
        callback()
    }
}

module.exports = buscarPergunta