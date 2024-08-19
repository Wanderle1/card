let {baralhos, flashcards} = require('../data')
const criarBaralho = require('../Baralho/criarBaralho')
const listarBaralhos = require('../Baralho/listarBaralhos')


function criarFlashCard(prompt,callback){
    if(baralhos.length == 0){
        console.log('É necessario criar um baralho')
        idBar = criarBaralho(prompt)
        let id =1
        let per = prompt('Digite a pergunta:').toLowerCase()
        let res = prompt('Digite a resposta da pergunta: ').toLowerCase()
        for(let i=0; i < flashcards.length;i++){
            if(id == flashcards[i].id){
                id++
            }    
        }
        flashcards.push({id: id, pergunta: per, resposta: res, idBaralho: idBar})
        
        console.log('criado com sucesso')
        callback()

    }else{
        listarBaralhos()
        let id = 1
        let idBar = parseInt(prompt('Digite o id do Baralho que deseja salvar: '))
        let index = baralhos.findIndex(baralho => baralho.id === idBar)
        if(index == -1){
            console.log('Id não encontrado')
            callback()
        }else{
            let per = prompt('Digite a pergunta: ').toLowerCase()
            let res = prompt('Digite a resposta da pergunta: ').toLowerCase()
            for(let i=0; i < flashcards.length; i++){
                if(id == flashcards[i].id){
                    id++
                }
            }
            flashcards.push({id: id, pergunta: per, resposta: res, idBaralho: idBar})
            console.log('criado com sucesso')
            callback()
        }
    }
}

module.exports = criarFlashCard