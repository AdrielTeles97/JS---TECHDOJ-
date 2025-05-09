const pessoa = {
    nome: "Maria",
    idade: 18,
    altura: 1.72,
    habilitada: false,
    estudar: () => {
        console.log("Maria está estudando não atrapalhe");
    },
    frutas_preferidas: ["Banana", "Pêra", "Laranja"],
    mae: {
        nome: "Ana",
        idade: 62,
        casada: true,
    },
};

console.log(pessoa.frutas_preferidas[2]);
console.log(pessoa.mae.nome);
