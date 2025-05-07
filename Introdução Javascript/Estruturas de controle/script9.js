const nome = prompt("Digite seu nome: ");
let contadorDeVogais = 0;
let contadorDeConsoantes = 0;

const todasAsVogaisComAcentos = "aàáâãäeèéêëiììîïoòòôõöuùúûü";
const consoantes = "bcdfghjklmnpqrstvxwyz";

for (let letraAtual of nome.toLowerCase()) {
    if (todasAsVogaisComAcentos.includes(letraAtual)) {
        contadorDeVogais++;
    } else if (consoantes.includes(letraAtual)) {
        contadorDeConsoantes++;
    }
}

alert(`Olá ${nome}. Seu nome tem ${contadorDeVogais} vogais e ${contadorDeConsoantes} consoantes!`);


