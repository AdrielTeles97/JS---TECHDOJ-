//FAÇA UMA APLICAÇÃO WEB COM O <p></p> ESCRITO 'Animal Desconhecido'
// CRIE 3 BOTÕES ESCRITOS RESPECTIVAMENTE, Gato, Cachorro, Papagaio.
// AO CLICAR EM CADA UM DELES, TEXTO DE <p></p> SERÁ TROCADO PARA O NOME DO ANIMAL RESPECTIVO.

const nomeAnimal = document.querySelector("#nomeAnimal");
const gato = document.querySelector("#gato");
const cachorro = document.querySelector("#cachorro");
const papagaio = document.querySelector("#papagaio");

gato.addEventListener("click", () => {
  nomeAnimal.textContent = "Gato";
});

cachorro.addEventListener("click", () => {
  nomeAnimal.textContent = "Cachorro";
});

papagaio.addEventListener("click", () => {
  nomeAnimal.textContent = "Papagaio";
});

// const nomeAnimal = document.querySelector("#nomeAnimal");
// const animais = document.querySelectorAll(".animais");
// animais.forEach((botao) => {
//   botao.addEventListener("click", () => {
//     nomeAnimal.textContent = botao.textContent;
//   });
// });
