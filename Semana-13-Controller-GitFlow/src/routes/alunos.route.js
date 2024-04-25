const { Router } = require("express")
const { auth } = require("../middleware/auth")
const AlunoController = require("../controllers/AlunoController")
const alunosRoutes = new Router()

//Criando rota para cadastrar alunos 
alunosRoutes.post("/", AlunoController.cadastrar) //insert into 
 
 //as que estão com auth na frente é que são privadas
 ////Criando rota para listar alunos
alunosRoutes.get("/", auth, AlunoController.Listar) //select * from alunos

//alunosRoutes.get('/:id', auth, AlunoController.ListarUm)
 
 //rota put para atualizar aluno
alunosRoutes.put('/:id', auth, AlunoController.Atualizar)
 
alunosRoutes.delete('/:id',auth,  AlunoController.Deletar)

module.exports = alunosRoutes
 