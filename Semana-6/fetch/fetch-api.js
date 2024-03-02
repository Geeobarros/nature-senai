/*
Crie um arquivo JSON chamado data.json com a seguinte estrutura interna:

{
  "nome": "João",
  "idade": 30,
  "email": "joao@example.com"
}
‌
Após isso, utilize a fetch API para obter o arquivo JSON e, em seguida, a resposta deve ser convertida para o formato JSON usando o método .json() . O conteúdo JSON deve ser então exibido na página HTML. */


fetch("./data.json")
.then((resposta_obj) => {
  return resposta_obj.json();
})
.then((resposta_json) =>{
  console.log(resposta_json)
})
.catch((error)=> console.log(error))
