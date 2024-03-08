/* Ex.7 Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos:
nome
idade
profissao
Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.

Ex.8 Crie uma nova classe chamada de Cliente. Esta classe deve herdar a classe Pessoa.

Além disso ela deve possuir os seguintes atributos:

telefone
email
clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
Crie um construtor para receber os valores para todos os atributos da classe Cliente e também da classe Pessoa, sendo necessário passar parâmetros para o construtor base da classe Pessoa.
*/

class Pessoa{ //ex.7
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Cliente extends Pessoa{ //ex.8
    telefone;
    email;
    clienteDesde = 'ANO-MES-DIA'

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}



let cliente = new Cliente(']Geovanna', 27, 'dev', '1191234-5678', 'geovanna@email.com', '2024-01-20')
console.log(cliente)
