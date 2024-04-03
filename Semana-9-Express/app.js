/*EX1
Crie um novo projeto Node.js.

Instale o Express.js usando o npm.

Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000.
*/
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

/*EX2
Adicione rotas ao novo projeto:

Uma rota GET que responda à URL '/sobre' com uma mensagem sobre o seu aplicativo.
Uma rota GET que responda à URL '/contato' com uma mensagem de contato. */
app.get('/sobre', (req, res) =>{
    res.send('Este é a rota sobre')
})

app.get('/contato', (req, res) => {
    res.send('Esta é a rota contato')
})


/*EX3 ??
Crie um middleware que registre informações sobre todas as solicitações recebidas pelo servidor Express.

Use esse middleware para registrar o método HTTP, a URL e o horário de cada solicitação no console.
*/

const horaComMiddleware = (req, res, next) => {
    const marcaHorario = new Date().toISOString();
    console.log(`${marcaHorario}: Solicitação recebida para: ${req.method} ${req.originalUrl} `)
    next()
}
// Passa o controle para o próximo middleware ou rota });


/*EX4
Defina uma rota GET que aceite um parâmetro de rota, como '/produto/:id', e responda com uma mensagem personalizada, com base no ID do produto fornecido. */

app.get('/produto/:id', horaComMiddleware, (req, res)=>{
    let id = req.params.id
    res.send(`Este é o seu produto com id: ${id}`)
})

/*EX5
Configure o Express para servir arquivos estáticos, como imagens, arquivos CSS e JavaScript, de um diretório específico em seu projeto.
 */

app.get('/html', horaComMiddleware, (req, res) =>{
    res.sendFile(__dirname + "/public/app.html")


});

/*EX6  Elabore um CRUD para a rota /users

Criação (Create):
Implemente uma rota POST /users que permita adicionar um novo usuário à lista.
O corpo da solicitação deve conter os dados do usuário a ser adicionado.
Após adicionar o usuário com sucesso, retorne uma resposta com status 201 (Created) e os dados do usuário recém-criado.
*/
let users = []

app.post('/users', horaComMiddleware, (req, res) => {
   const user = req.body;

   user.id = users.length + 1;
   users.push(user)
   res.status(201).send('Usuário criado com sucesso')
});

/*Leitura (Read):
Implemente uma rota GET /users que retorne a lista completa de usuários.
Implemente uma rota GET /users/:id que retorne os detalhes de um usuário específico com base no ID fornecido na URL.
Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
*/

app.get('/users', horaComMiddleware, (req, res) =>{
    res.send(users)
})

//Com parâmetro ID
app.get('/users/:id', horaComMiddleware, (req, res) =>{
    try {
        const { id } = req.params
        const user = users.find(usr => usr.id === parseInt(id)); //Procura o usuario
        if (user === undefined){
            throw new Error('ID não encontrado')
        }else { 
            res.json(user)
        }
    } catch (error) {
        res.status(404).send("Not found" + error)
    }

})
/*
Atualização (Update):
Implemente uma rota PUT /users/:id que permita atualizar os dados de um usuário existente com base no ID fornecido na URL.
O corpo da solicitação deve conter os novos dados do usuário a serem atualizados.
Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
Após atualizar o usuário com sucesso, retorne uma resposta com status 200 (OK) e os dados atualizados do usuário.*/

app.put('/users/:id', horaComMiddleware, (req, res) =>{
    try {
        const { id } = req.params
        const newData = req.body
        const index = users.findIndex(usr => usr.id === parseInt(id)); //procurar pelo indice do array
        if (index === -1){
            throw new Error('ID não encontrado')
        }else { 
            users[index] = {...users[index], ...newData}
            res.status(200).send(`Usuário atualizado: Id: ${users[index].id} - Nome: ${users[index].user}`)
        }
    } catch (error) {
        res.status(404).send("Not found" + error)
    }
})
/*
Exclusão (Delete):
Implemente uma rota DELETE /users/:id que permita excluir um usuário com base no ID fornecido na URL.
Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
Após excluir o usuário com sucesso, retorne uma resposta com status 200 (OK) e uma mensagem indicando que o usuário foi excluído.
 */

app.delete('/users/:id', horaComMiddleware, (req, res) => {
    try {

        const { id } = req.params
        const index = users.findIndex(usr => usr.id === parseInt(id)); 
        if (index === -1){
            throw new Error ('ID não encontrado')
        } else {
            users.splice(index, 1)
            res.status(200).send('Usuário excluído com sucesso')
        }
    } catch (error){
        res.status(404).send("Not found" + error)

    }
        


})



//EX1. Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000.

app.listen(port, () =>{
    console.log(`Servidor rodando no http://localhost:${port}`)
})


