/*
Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.
*/

const numerosOrdenados = [7, 30, 25, 20, 50]

numerosOrdenados.sort((a,b) => a - b)

console.log(numerosOrdenados)