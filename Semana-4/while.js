/*
Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação da série "Stranger Things”, 
será apenas aceita três tipos de avaliação: ruim, bom e excelente. 
Depois verifique quantas pessoas classificaram a série como ruim.
*/
let i = 0;
let bom = 0
let ruim = 0
let excelente = 0


while(i < 4){
    let pergunta = window.prompt("Digite uma avaliação para stranger things, sendo ruim, bom ou excelente")
   

    if (pergunta == 'ruim'){      
        ruim++
    }
    i++
}
console.log('A quantidade de respostas "ruim" foram: '+ruim) 