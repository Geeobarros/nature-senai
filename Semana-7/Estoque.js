class Produto{  //ex.1
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade){ //ex.2
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    vender(quantidadeVendida){ //ex.3
        if(quantidadeVendida > this.quantidade){
            console.log('Estoque insuficiente')
            return
        }
        this.quantidade -= quantidadeVendida
        
    }

    repor(quantidadeReposta){ //ex.4
        this.quantidade += quantidadeReposta
        return
    }

    mostrarEstoque(){ //ex.5
        console.log(`O produto ${this.nome} possui ${this.quantidade} disponíveis.`)
    }

    atualizarPreco(novoValor){ //ex.6
        this.preco = novoValor
        console.log(`O novo preço do ${this.nome} é de R$${this.preco}.`)
    }

}
let loja1 = new Produto('Caderno 10 matérias', 20, 50)






