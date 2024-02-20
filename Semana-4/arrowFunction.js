/*Crie uma arrow function que recebe um array de números e calcula a média deles.

OBS: para pegar o tamanho de um array use nomeDoArray.length*/

const numeros = [10, 10, 5];



const calcularMedia = (num) => {
    let soma = 0;
    for(i = 0; i < num.length; i++){
        soma = soma + num[i]
    }

    let media = 0;
    media = soma / num.length;
    console.log("Média = ", media)
}

calcularMedia(numeros)