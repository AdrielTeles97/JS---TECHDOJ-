// //Atividade 1
// //Inicializa variaveis
// const resultado = document.querySelector("#resultado");
// const numeros_digitados = [];

// //primeira etapa
// for (let i = 1; i <= 3; i++) {
//     const numero = Number(prompt(`Digite o ${i}º de 3 números: `));
//     numeros_digitados.push(numero);
// }

// let maior_numero = numeros_digitados[0];
// let posicao = 0;

// numeros_digitados.forEach((numero, i) => {
//     if (numero > maior_numero) {
//         maior_numero = numero;
//         posicao = i;
//     }
// });

// //Terceira etapa
// if (posicao === 0) {
//     resultado.textContent = `O maior número foi: ${maior_numero}. \nPosição: ${posicao}`;
//     resultado.style.color = "blue";
// } else if (posicao === 1) {
//     resultado.textContent = `O maior número foi: ${maior_numero}. \nPosição: ${posicao}`;
//     resultado.style.color = "pink";
// } else if (posicao === 2) {
//     resultado.textContent = `O maior número foi: ${maior_numero}. \nPosição: ${posicao}`;
//     resultado.style.color = "brown";
// }

//Atividade 2
/**Faça um programa que pede para o usuário
 * o nome de um animal entre "Gato" ou "Cachorro"
 * e coloque a imagem do animal que foi escolhido.
 */

const imagem_animais = document.querySelector(".animais");
const nome_animais = prompt("Gato ou Cachorro ?");

if (nome_animais.toLowerCase().trim() === "gato") {
    imagem_animais.src =
        "https://www.whiskas.com.br/sites/g/files/fnmzdf2156/files/2024-08/idade-dos-gatos-01.jpg";
    imagem_animais.alt = "Imagem Gato";
    imagem_animais.width = "200";
} else if (nome_animais.toLowerCase().trim() === "cachorro") {
    imagem_animais.src =
        "https://i.pinimg.com/236x/93/4e/6a/934e6a0f0aab64acf2d84951fa348946.jpg";
    imagem_animais.alt = "Imagem Cachorro";
    imagem_animais.width = "200";
} else {
    alert("Animal Inválido!");
}
