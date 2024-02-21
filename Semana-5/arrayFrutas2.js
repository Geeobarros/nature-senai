/*
Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.
*/

const frutas = ['manga', 'uvas','pêssego']

frutas.push('Melancia') //ADICIONA UM ITEM AO FINAL DO ARRAY

frutas.shift()  //REMOVE O PRIMEIRO ITEM DO ARRAY E DESLOCA OS OUTROS PARA A ESQUERDA

console.log(frutas)
