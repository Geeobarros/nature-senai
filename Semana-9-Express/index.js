const express = require('express')
const app = express()


app.get('/sobre', (req, res) =>{
    res.send('Esta é uma rota get')
})
app.listen(3000, () =>{
    console.log('Servidor rodando')
})

