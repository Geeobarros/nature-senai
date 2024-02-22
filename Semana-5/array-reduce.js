/*
Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.
 */

const numeros = [7, 20, 25, 30, 50]
 
let somar = numeros.reduce((accm, numeroTotal) => {  // accm= acumulador e numeroTotal= o numero que será somado de cada
    return accm + numeroTotal
},0)

console.log(somar)