let {baralhos, flashcards} = require('../data')
const criarBaralho = require('../Baralho/criarBaralho')


function criarFlashCard(prompt,callback){
    if(baralhos.length == 0){
        console.log('É necessario criar um baralho')
        idBar = criarBaralho(prompt)
        let id =1
        let per = prompt('Digite a pergunta:')
        let res = prompt('Digite a resposta da pergunta: ')
        for(let i=0; i < flashcards.length;i++){
            if(id == flashcards[i].id){
                id++
            }    
        }
        flashcards.push({id: id, pergunta: per, resposta: res, idBaralho: idBar})
        
        console.log('criado com sucesso')
        console.log(flashcards, baralhos, idBar)
        callback()

    }
}

module.exports = criarFlashCard