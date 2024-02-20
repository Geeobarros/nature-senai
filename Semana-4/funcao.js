const prompt = require('prompt-sync')();

function parImpar() {
    let numero = prompt('Digite um número: ')
   

    if (numero % 2 === 0){
        console.log(`O número ${numero} é PAR!`)
    }else{
        console.log(`O número ${numero} é ÍMPAR!`)
    }
}

parImpar()