/*
Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage. */

const getinfo = () => {
  let nome = prompt("Qual o seu nome?");
  let idade = prompt("Qual a sua idade?");
  let email = prompt("Qual o seu email?");

  
  const users = {
    nome: nome,
    idade: idade,
    email: email
  }
  
  localStorage.setItem('user', JSON.stringify(users))
};
getinfo();
