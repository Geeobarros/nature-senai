/*
Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.
 */
const numeros = [7, 30, 25, 20, 50]

const quadrado = numeros.map(q =>  q **2
)

console.log(quadrado)