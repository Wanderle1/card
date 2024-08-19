const prompt = require('prompt-sync')()
const criarBaralho = require('./Baralho/criarBaralho')
const listarBaralhos = require('./Baralho/listarBaralhos')
const atualizarBaralho = require('./Baralho/atualizarBaralho')
const deletarBaralho = require('./Baralho/deletarBaralho')
const criarFlashCard = require('./Flashcards/criarFlashCard')
const listarFlashCards = require('./Flashcards/listarFlashCards')
const atualizarFlashcards = require('./Flashcards/atualizarFlashCards')
const excluirFlashCards = require('./Flashcards/excluirFlashCards')
const buscarPergunta = require('./buscarPergunta')
const buscarPorBaralho = require('./buscarPorBaralho')


function menu(){
    console.log(`
    Menu: 
    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    11. Buscar Flashcards por Baralho
    0. Sair `)

    let opcao = prompt('Digite a opção desejada: ')
    
    switch(opcao){
        case '1':
            criarBaralho(prompt)
            menu()
            break;
        case '2':
            criarFlashCard(prompt, menu)
            break;
        case '3':
            listarBaralhos()
            menu()
            break; 
        case '4':
            listarFlashCards()
            menu()    
        case '6':
            atualizarBaralho(prompt, menu)
            break;
        case '7':
            atualizarFlashcards(prompt, menu)
            break;
        case '8':
            deletarBaralho(prompt, menu)
            break;
        case '9':
            excluirFlashCards(prompt, menu)
            break;
        case '10':
            buscarPergunta(prompt, menu)
            break;
        case '11':
            buscarPorBaralho(prompt, menu)
            break;
        case '0':
            break;    
        default:
            throw new Error('Opção Invalida')    
    }
}

menu()