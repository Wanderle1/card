let {baralhos} = require('../data')

function criarBaralho(prompt){
    let id=1
    let nome = prompt('Digite o nome do baralho: ')
    for(let i=0; i < baralhos.length; i++){
        if(id == baralhos[i].id){
            id++
        }
    }
    baralhos.push({id: id, nome: nome})
    console.log('Criado com Sucesso')
    return id
}

module.exports = criarBaralho