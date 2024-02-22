/*
Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.
Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas
 */

const aarfrutas = ['manga', 'uvas','pêssego']

console.log(aarfrutas[2])


//DESAFIO
const prompt = require('prompt-sync')()
let frutas = []

for(i = 0; i < 3; i++){
    
    const add_fruta = prompt('Digite uma fruta: ')

    frutas.push(add_fruta)
}


console.log(frutas[2])
