const { Router } = require("express")
const Aluno = require("../models/aluno") //importando do model Aluno
const Curso = require("../models/Curso")
const { error } = require("console")
const { where } = require("sequelize")

const routes = new Router()


//Criando rota para criar cursos Ex: 1
routes.post("/cursos", async (req, res) => {
    try {
        const nome = req.body.nome
        const duracao_horas = req.body.duracao_horas


        if(!nome){
            return res.status(400).json({messagem: 'Não é possível cadastar cursos'})
        }
        
        if(!duracao_horas || !(duracao_horas >= 40 && duracao_horas <= 200)){
            return res.status(400).json({mensagem: 'Necessário inserir horas'})
        }
        
        const curso = await Curso.create({
        nome: nome,
        duracao_horas: duracao_horas
    })
    
    res.status(201).json({ curso })

        
    } catch (error) {
        res.status(400).json({error: 'não foi possível cadastrar o curso'})
    }
})

//Criando rota para listar todos cursos EX: 2
routes.get('/cursos', async(req, res) =>{
    const nome = req.params  

   const cursos = await Curso.findAll()
    
    res.json(cursos)
})

//rota get para lista cursos pelo nome EX: 3
routes.get('/cursos', async(req, res) =>{
    const nome = req.query.nome || ''   //Dai uso lá no query params no postman

   const cursos = await Curso.findAll({
        where: {
            nome: nome
        }
    })

    res.json(cursos)
})




//End point para atualizar o curso EX:4
routes.put('/cursos/:id', async (req, res) => {

    try {
        const id = req.params.id
        const curso = await Curso.findByPk(id)
    
        if(!id) {
            return res.status(404).json({mensagem: 'Curso não encontrado'})
        }
        
        curso.update(req.body)
        await curso.save()
        res.json(curso)
        
        
        
    } catch (error) {
        res.status(400).json({mensagem: 'Não foi possível atualizar o curso'})
        
    }
})

//BODY PARAMS= post e put
//ROUTE PARAMS = put e delete
//QUERY PARAMS=get
//rota de deleção de curso EX:5 
routes.delete('/cursos/:id', async(req, res) =>{
    
    const id = req.params.id //DELETE FROM CURSOS WHERE ID=X
    try {
        await Curso.destroy({
            where:{
                id
            }
        })
    
        return res.status(204).json({messagem: 'deleted'})
        
    } catch (error) {
        if (!id){
            return res.status(404).json({error:"Id do curso não encontrado"})
        }
        
    }
})

//Criando rota para cadastrar alunos 
routes.post("/alunos", async (req, res) => { //insert into 
   try {
    const { nome, data_nascimento, celular } = 
    req.body

    if(!nome){
        return res.status(400).json({messagem: 'O nome não foi inserido'})
    }

    if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)){ //mascara para data no formato desejado
        return res.status(400).json({messagem: 'A data de nascimento não está no formato correto'})
    }

    if (!data_nascimento){
        return res.status(400).json({messagem: 'a data de nascimento é obrigatoria'})
    }
    
    const aluno = await Aluno.create({ //Se os nomes forem iguais as variaveis pode ser por aqui apenas   --const aluno = await Aluno.create(req.body)
        nome: nome,
        data_nascimento: data_nascimento,
        celular: celular
    })
    res.status(201).json({ aluno })
    
   } catch (error) {
        res.status(500).json({error: 'Não foi possível cadastrar o aluno'})
   }
})

////Criando rota para listar alunos
routes.get("/alunos", async (req, res) => {  //select * from alunos

    const alunos = await Aluno.findAll()
    res.json(alunos)
})

//rota put para atualizar aluno
routes.put('/aluno/:id', async (req, res) => {

    try {
        const id = req.params.id
        const aluno = await Aluno.findByPk(id)
    
        if(!id) {
            return res.status(404).json({mensagem: 'Aluno não encontrado'})
        }
        
        aluno.update(req.body)
        await aluno.save()
        res.json(aluno)
        
        
        
    } catch (error) {
        res.status(400).json({mensagem: 'Não foi possível atualizar o aluno'})
        
    }
})

routes.delete('/alunos/:id', async (req, res)=>{
    const id = req.params.id
    try {
        await Aluno.destroy({
            where:{
                id
            }
        })
        return res.status(204).json({})
        
    } catch (error) {
        
        if(!id){
            return res.status(404).json({errormessage})
        }
    }
    




})







module.exports = routes