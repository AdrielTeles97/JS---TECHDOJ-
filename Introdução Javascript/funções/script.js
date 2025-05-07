//Atividades

// function vogais_e_consoantes(palavra) {
//     let contador_de_vogais = 0;
//     let contador_de_consoantes = 0;

//     const vogais = 'aeiou';
//     const consoantes = "bcdfghjklmnpqrstvwyxz";

//     for (let letra of palavra) {
//         if (vogais.includes(letra.toLowerCase())) {
//             contador_de_vogais++;
//         }
//     }

//     for (let letra of palavra) {
//         if (consoantes.includes(letra.toLowerCase())) {
//             contador_de_consoantes++;
//         }
        
//     }

//     return (`Sua palavra tem: ${contador_de_vogais} vogais e ${contador_de_consoantes} consoantes`);

// }

// const palavra = prompt("Digite uma palavra");
// alert(vogais_e_consoantes(palavra));


//ATIVIDADE 2
// const consultaNumero = numero => numero > 0 ? `POSITIVO!` : numero < 0 ? `NEGATIVO` : `NEUTRO`;
// const numero = Number(prompt("Digite um número: "));

// alert(consultaNumero(numero));

//ATIVIDADE 3
const text = document.querySelector("#texto");
const button = document.querySelector("#btn");
let visible = false;

button.addEventListener("click", () => {
    visible = !visible;

    if (visible) {
        text.textContent = "Fui Clicado, BOA!!";
    } else {
        setTimeout(() => {
            let count = 3;

            const countDown = setInterval(() => {
                text.textContent = `Tô limpando a tela em ${count} segundos`;
                count--;

                if (count === 0) {
                    clearInterval(countDown);

                    setTimeout(() => {
                        text.textContent = "";
                    }, 1000);
                }
            }, 1000); // ← Aqui tava faltando o tempo do intervalo
        }, 500); // ← Pequeno delay opcional antes de começar
    }
});
