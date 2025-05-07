// //ATIVIDADE 1 //Slice corta elementos do array
// const estados = ["Ceará", "Bahia", "Maranhão", "Piauí", "Acre", "Goiás"];
// const estados_do_nordeste = estados.slice(0,4);
// console.log(estados_do_nordeste);

//ATIVIDADE 2 //SPLICE altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
// const animais = ["Leão", "Gato", "Porco", "Aguia"];
// animais.splice(1, 2, "Onça", "Lobo");
// console.log(animais);

//ATIVIDADE 3
// const nomes = ["João", "Maria", "Pedro", "Ana", "Abel"];
// const maiusculo = nomes.map(nome_da_vez => nome_da_vez.toUpperCase());
// console.log(maiusculo);

//ATIVIDADE 4
const numeros = [28, 56, 41, 15, 18, 22, 10, 6, 33];
const menor_de_idade = numeros.filter(numero_menor => numero_menor < 18);
console.log(menor_de_idade);
