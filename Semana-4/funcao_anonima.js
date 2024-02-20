/*
Implemente uma função chamada adicao que aceita dois números como argumentos e uma função anônima. 
Esta função deve simular uma operação de adição, onde os dois números são somados. 
Após a soma, chame a função passada como parâmetro e o resultado deve ser passado para a função anônima.
OBS: a função anônima apenas irá imprimir o resultado passado pelo parâmetro. 
*/


function adicao(num1, num2, cb) {
    var soma = num1 + num2
    cb(soma)
}

//modo 1
function exibeNoFormato1(num){
    console.log("O resultado da soma é: " , num)
}
//modo 2
const exibe = (e) => console.log('o resultado é: ', e)

//resultado modo 1
adicao(5, 20, exibeNoFormato1)

//resultado modo 2
adicao(5, 20, exibe)

//modo3  e resultado 3
adicao(5, 20, (e) => console.log('o resultado é: ', e))