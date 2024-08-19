let {baralhos, flashcards} = require('./data')
const listarBaralhos = require('./Baralho/listarBaralhos')

function buscarPorBaralho(prompt, callback){
    listarBaralhos()
    let id = parseInt(prompt('Digite o id do baralho: '))
    let index = baralhos.findIndex(baralho => baralho.id === id)
    if(index == -1){
        console.log('id não encontrada')
        callback()
    }else{
        let index = flashcards.findIndex(flashcard => flashcard.idBaralho === id)
        if(index == -1){
            console.log('O baralho esta vazio')
            callback()
        }else{
            const flashcardId = flashcards.filter(flashcard => flashcard.idBaralho === id)
            flashcardId.forEach(flashcard => {
                console.log(`ID do flashcard: ${flashcard.id} Pergunta: ${flashcard.pergunta} Resposta: ${flashcard.resposta} id do Baralhos: ${flashcard.idBaralho}`)
            })
            callback()
        }
    }
}

module.exports = buscarPorBaralho