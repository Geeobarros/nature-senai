const { Router } = require("express")
const { auth } = require("../middleware/auth")
const MatriculaController = require("../controllers/MatriculaController")

const matriculaRoutes = new Router()


matriculaRoutes.post('/', auth, MatriculaController.Cadastrar ) 
 
// matriculaRoutes.get("/", auth, AlunoController.Listar) //select * from alunos


// matriculaRoutes.put('/:id', auth, AlunoController.Atualizar)
 
// matriculaRoutes.delete('/:id',auth,  AlunoController.Deletar)

module.exports = matriculaRoutes
 