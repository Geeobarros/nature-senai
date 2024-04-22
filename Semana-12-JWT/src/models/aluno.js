const { password } = require("../config/database.config")
const { connection } = require("../database/connection") //importa a variavel connection para comunicar com o BD
const { DataTypes } = require("sequelize")

const Aluno = connection.define('alunos', {  //nome da tabela que quer acessar
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {                             //colunas que quero acessar
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING
    }
    

})

module.exports = Aluno  //exporta para poder usar ela e interagir com o BD, ela represanta a definição da tabela