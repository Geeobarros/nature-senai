/*
Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.

Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.
 */

const numeros = [7, 20, 25, 30, 50]

for(i = 0; i < numeros.length; i++){
   // console.log(numeros[i])
   
};

//DESAFIO
const prompt = require('prompt-sync')()


const numerosPrompt = []

for(j = 0; j < 5; j++){
    
    let pergunta = prompt('Digite 1 números: ')

    for(k = 0; k < numerosPrompt.length; k++ )
    numerosPrompt.push(pergunta)

}

console.log(numerosPrompt[j])    

    