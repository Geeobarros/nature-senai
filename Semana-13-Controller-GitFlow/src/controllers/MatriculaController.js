const Aluno = require("../models/aluno")
const Curso = require("../models/Curso")
const Matricula = require("../models/Matricula")


class MatriculaController {

    async Cadastrar(req, res){
        try {
            
            const curso_id = req.body.curso_id
            const aluno_id = req.body.aluno_id
            
            if(!aluno_id || !curso_id){
                return res
                .status(400)
                .json({message: 'O ID do aluno e curso são obrigatórios'})
            }
            
            /* Validar se o id do aluno existe */
            const aluno = await Aluno.findByPk(aluno_id)
            if (!aluno) {
                return res
                .status(404)
                .json({message: 'O aluno não existe'})
            }

            /* Validar se o id do curso existe */
            const curso = await Curso.findByPk(curso_id)
            if (!curso) return res.status(404).json({message: 'O curso não existe'})
    
    
            /* Validar se já existe o mesmo curso para o mesmo aluno */
            const matriculaExistente =  await Matricula.findOne(
                {where: {curso_id: curso_id, aluno_id: aluno_id}})
            if(matriculaExistente){
                return res.status(409).json({message: 'Aluno já cadastrado para este curso'})
            }

    
            const matricula = await Matricula.create({
                curso_id,
                aluno_id
            })
    
            res.status(201).json(matricula)
        } catch (error) {
            res.status(500).json({mensagem: 'Não foi possível realizar a matricula'})
        }

        
       
    }
}

module.exports = new MatriculaController()