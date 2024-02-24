/*
Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.
*/
const numeros = [7, 30, 25, 20, 50]

const pares  = numeros.filter(n => {
    if (n % 2 == 0){
        return true
    }
})

console.log(`Os números pares são: ${pares}`)