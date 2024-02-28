/*
Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.

Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

‌

OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a mensagem como parâmetro
 */

const verificarPar = (n) => n % 2 == 0 

const promessa = new Promise((resolve, reject) =>{
   

    if(verificarPar(2)){
        resolve('Número validado é par')
    }else {
        reject('Error: número validado não é par')
    }
});

promessa
.then((mensagem) => console.log(mensagem))
.catch((erro) => console.log(erro))
