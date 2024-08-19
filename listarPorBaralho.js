let {baralhos, flashcards} = require('./data')

function listarPorBaralhos(){
   if(flashcards.length == 0){
      console.log('Não a flashcards Cadastrados')
   }else{
      baralhos.forEach((baralho)=>{
      console.log(`ID do baralho: ${baralho.id} Nome do baralho: ${baralho.nome}`)
      const flashcardBaralho = flashcards.filter(flashcard => flashcard.idBaralho === baralho.id)
      flashcardBaralho.forEach(flashcard => {
        console.log(`ID do flashcard: ${flashcard.id} Pergunta: ${flashcard.pergunta} Resposta: ${flashcard.resposta} id do Baralhos: ${flashcard.idBaralho}`)
      })
      console.log('')
     })
   }
}

module.exports = listarPorBaralhos