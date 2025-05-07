let soma = 0;
let quantidade = 0;
let nota;

while(true) {
    nota = Number(prompt("Digite uma nota ou digite 11 para sair!"));

    if (nota === 11) {
        //Para execução do script
        break;
    } else {
        soma += nota;
        quantidade++;
    }
}

const media = soma / quantidade;

if(media >= 7 && quantidade > 0) {
    alert(`Sua média foi ${media} e você está aprovado!`);
} else {
    alert(`Você está reprovado! Sua média foi ${media}`);
}

