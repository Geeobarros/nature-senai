const frutas = ['manga', 'uvas','pêssego']

console.log(frutas[2])



//DESAFIO
const prompt = require('prompt-sync')()
let frutas1 = []

for(i = 0; i < 3; i++){
    
    const add_fruta = prompt('Digite uma fruta: ')

    frutas1.push(add_fruta)
}


console.log(frutas1[2])
