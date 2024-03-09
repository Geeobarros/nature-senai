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
        console.log(`Produto: ${this.nome}. \nQuantidade: ${this.quantidade} disponíveis. \nPreço: ${this.preco}.`)
    }

    atualizarPreco(novoValor){ //ex.6
        this.preco = novoValor
        console.log(`O novo preço do ${this.nome} é de R$${this.preco}.`)
    }

}
let caderno = new Produto('Caderno 10 matérias', 20, 50)
caderno.mostrarEstoque()






