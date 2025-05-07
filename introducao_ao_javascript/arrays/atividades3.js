// //ATIVIDADE 1
// const lista_de_numeros = [];

// for (let i = 1; i <= 10; i++) {
//     const numeros = Number(prompt(`Digite o ${i} de 10 números: `));
//     if (numeros !== 0) {
//         lista_de_numeros.push(numeros);
//     }
// }

// let menor_numero = lista_de_numeros[0];

// for (let numero_da_vez of lista_de_numeros) {
//     if (numero_da_vez < menor_numero) {
//         menor_numero = numero_da_vez;
//     }
// }

// alert(`O menor número digitado foi: ${menor_numero}`);

// //ATIVIDADE 2
// const lista_de_numeros = [];
// while (true) {
//     const numero = Number(prompt('Digite quantos números precisar!'));
//     if (numero <= 0) {
//         break;
//     } else {
//         lista_de_numeros.push(numero);
//     }
// }

// const pares = lista_de_numeros.filter((numeros) => {
//     return numeros % 2 === 0;
// });

// const impares = lista_de_numeros.filter((numeros) => {
//     return numeros % 2 === 1;
// });

// console.log(`Pares digitados: ${pares.length}`);
// console.log(`ímpares digitados: ${impares.length}`);

//ATIVIDADE 3
const todosOsNomes = [];
for (let i = 1; i <= 5; i++) {
    const nome = prompt(`Digite o ${i}º de 5 nomes`);
    todosOsNomes.push(nome);
}

const quantidade_de_caracteres = todosOsNomes.map(caracteres => caracteres.length);

console.log(`Caracteres dos nomes: ${quantidade_de_caracteres}`);


// const nome = ["Ana"];
// const caractere = nome.map((nome) => {
//     return nome.length;
// });

// console.log(caractere)
