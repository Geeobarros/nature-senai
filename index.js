// //ex1. Crie um novo projeto Node.js.
// Instale o Express.js usando o npm.
// Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000.

const express = require("express")
const app = express();

app.listen(3000, () =>{
    console.log("Servidor rodando")
})