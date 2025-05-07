function checarNotasComDoisNumeros(n1 = 0, n2 = 0) {
    const media = (n1 + n2) / 2;
    if (media >= 7) {
        return `Sua média foi ${media}. você está APROVADO!`;
    } else {
        return `Sua média foi ${media}. você foi REPROVADO!`;
    }
}


function checarNotasComDoisTresNumeros(n1 = 0, n2 = 0, n3 = 0) {
    const media = (n1 + n2 + n3) / 3;
    if (media >= 7) {
        return `Sua média foi ${media}. você está APROVADO!`;
    } else {
        return `Sua média foi ${media}. você foi REPROVADO!`;
    }
}

while(true) {
    const menu = Number(prompt("\n1-Checar nota com dois números\n2-Checar notas com 3 números\n0-Sair Do programa."));
    if (menu === 1) {
        const n1 = Number(prompt("Digite a 1º nota: "));
        const n2 = Number(prompt("Digite a 2º nota: "));
        alert(checarNotasComDoisNumeros(n1,n2));
    } else if (menu === 2) {
        const n1 = Number(prompt("Digite a 1º nota: "));
        const n2 = Number(prompt("Digite a 2º nota: "));
        const n3 = Number(prompt("Digite a 3º nota: "));
        alert(checarNotasComDoisTresNumeros(n1, n2, n3));
    } else if (menu === 0) {
        alert("Encerrando programa ...");
        break;
    } else {
        alert("Opção inválida!");
    }
}





