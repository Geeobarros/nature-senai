const { Router } = require("express")
const Aluno = require("../models/aluno") //importando do model Aluno
const { password } = require("../config/database.config")
const { sign } = require("jsonwebtoken")
const LoginController = require("../controllers/LoginController")
const loginRoutes = new Router()

//             ---------LOGIN---------
loginRoutes.post('/',  LoginController.Login)
    

module.exports = loginRoutes