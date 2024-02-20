/*
Você foi contratado por um supermercado para catalogar a compra de uma cliente. 
Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, 
só serão aceitas as seguintes respostas:
(1)Hortifruti
(2)Laticínios
(3)Carnes
(4)Peixes
(5)Aves
(6)Fechar pedido


Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.

Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.

Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.
*/

//fora do while mostra qual item é maior e mostra

let compras = [];
let id_produto = 0
let produto = ''
let quantidade = 0


while (id_produto < 6){
    
    id_produto = prompt('Qual produto deseja comprar? Selecione pelo número. \n (1)Hortifruti \n (2)Laticínios \n (3)Carnes \n (4)Peixes \n (5)Aves \n (6)Fechar pedido ')
    
    if (id_produto < 6 ){

        quantidade = prompt('Qual a quantidade?');

        if (id_produto == 1){
            produto = "Hortifruti"
        } else if (id_produto == 2){
            produto = 'Laticinios'
        } else if (id_produto == 3){
            produto = 'Carnes'
        }   else if (id_produto == 4){
            produto = 'Peixe'
        } else if (id_produto == 5){
            produto = 'Aves'
        }else{
            produto = ('Digite uma opção válida')
        }
        
        compras.push({
            ID: id_produto,
            produto: produto,
            quantidade: Number(quantidade)
        });

    };

};


//Aqui mostra a maior quantidade que foi inserido
let quantidadeMaior = 0;  //variavel para armazenar os valores inseridos

for(i = 0; i < compras.length; i++){   //i tem que ser menor que minha quantidade

    let compra = compras[i];  //variavel para passar os numeros que estao no array


    if(compra.quantidade > quantidadeMaior){
        quantidadeMaior = compra.quantidade
    }    
}

alert(`O ${produto} teve maior quantidade com ${quantidadeMaior}`)

console.log(compras)

