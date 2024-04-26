const { compare } = require("bcryptjs")
const Aluno = require("../models/aluno") //importando do model Aluno
const { sign } = require("jsonwebtoken")

class LoginController{
    async Login(req,res){
        try {
            const email = req.body.email
            const password = req.body.password
    
            if (!email && !password){
                return res.status(404).json({messagem: 'Email ou senha não informados'})
            }

            
            //Procura na tabela de Aluno, o aluno que corresponde com o email e senha fornecido!
            const aluno = await Aluno.findOne({
                where: {
                    email: email
                }
            })
            
            const hashSenha = await compare(password, aluno.password)
            if(hashSenha === false){
                return res.status(403).json({message: 'Dados inválidos'})  
            }
            
            if(!aluno){
                
                return res.status(404).json({mensagem: 'Não existe aluno com email e senha informados '})
            }
    
            //payload do JWT
            const payload = {sub: aluno.id, email:aluno.email, nome:aluno.nome}
    
            const token = sign(payload, process.env.SECRET_JWT)
            console.log(process.env.SECRET_JWT)
    
            res.status(200).json({Token: token})
                    
        } catch (error) {
            console.log(error)
            res.status(500).json({error: error, messagem: 'Algo inesperado aconteceu'})
        }
    }
    
}

module.exports = new LoginController()