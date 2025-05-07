const frase = prompt("Digite uma frase: ")
let contadorDePalavras = 1;

for (let contadorDeEspaços of frase.trim()) {
    if (contadorDeEspaços === " ") {
        contadorDePalavras ++;
    }
}

alert(`Seu texto tem ${contadorDePalavras} palavras`);

