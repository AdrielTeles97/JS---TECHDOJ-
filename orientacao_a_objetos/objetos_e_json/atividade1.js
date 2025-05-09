const nome_do_filme = prompt("Digite o nome do filme");
const ano_lancamento = prompt("Ano de lançamento");

const filme = {
    titulo: nome_do_filme,
    ano_lanc: ano_lancamento,
    duracao: 1.45,
    elenco: ["Joana Silva", "Mateus Vieira", "Maikon Silva", "Beth Ferreira"],
    genero: "Comédia",
};

filme.ano_lanc = 2025;
console.log(filme);
