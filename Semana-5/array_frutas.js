/*
Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.
Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas
 */

const frutas = ['manga', 'uvas','pêssego']

console.log(`A segunda fruta é: ${frutas[1]}`)


//DESAFIO
const prompt = require('prompt-sync')()
let frutas1 = []

for(i = 0; i < 3; i++){
    
    const add_fruta = prompt('Digite uma fruta: ')

    frutas.push(add_fruta)
}


console.log(`A segunda fruta é: ${frutas[1]}`)
