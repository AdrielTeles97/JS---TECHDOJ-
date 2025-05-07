const cor = prompt("Digite a cor do semáforo: ").trim();

switch (cor.toLowerCase()) {
    case "vermelho":
        alert("PARE!");
        break;
    case "amarelo":
        alert("ATENÇÃO!");
        break;
    case "verde":
        alert("PROSSIGA!");
        break;
    default:
        alert("Opção inválida!");
        break;
}