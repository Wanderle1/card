let {baralhos} = require('../data')

function listarBaralhos(){
   if(baralhos.length == 0){
      console.log('Não a Baralhos Cadastrados')
   }else{
      baralhos.forEach((baralho)=>{
      console.log(`ID: ${baralho.id} Nome: ${baralho.nome}`)
     })
   }
}

module.exports = listarBaralhos