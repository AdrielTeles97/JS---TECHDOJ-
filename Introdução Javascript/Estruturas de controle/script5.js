let resposta
do {
    resposta = Number(prompt("Escolha uma opção\n 1-Olá\n2-Adeus\n3-Sair"));
    switch (resposta) {
        case 1:
            alert("Olá! Seja bem vindo");
            break;
        case 2:
            alert("Adeus, Volte sempre!");
            break;
        case 3:
            break;
        default:
            alert("Opção inválida!");
            break;
    }

} while (resposta !== 3)1