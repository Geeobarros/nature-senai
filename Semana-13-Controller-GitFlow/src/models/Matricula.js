const { connection } = require("../database/connection") //importa a variavel connection para comunicar com o BD
const { DataTypes } = require("sequelize")

const Matricula = connection.define('matriculas', {  //nome da tabela que quer acessar
 
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    curso_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

// Matricula.belongsToMany(Aluno)
// Matricula.belongsToMany(Curso)
// Aluno.hasMany( matricula, {foreignKey: 'id'})

module.exports = Matricula