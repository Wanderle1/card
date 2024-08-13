let {flashcards} = require('../data')

function listarFlashCards(){
    if(flashcards.length == 0){
        console.log('Não a FlashCards Cadastrados')
     }else{
        flashcards.forEach((flashcard)=>{
        console.log(`ID: ${flashcard.id} Pergunta: ${flashcard.pergunta} Resposta: ${flashcard.resposta} id do Baralhos: ${flashcard.idBaralho}`)
        
        })
     }
    }

module.exports = listarFlashCards