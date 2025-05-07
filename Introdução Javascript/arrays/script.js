const pessoas = [
    ["João", 28, 1.86],
    ["Maria", 30, 1.65],
    ["Pedro", 18, 1.72],
    ["Ana", 27, 1.75],
];

const nome_pessoas = pessoas.map(pessoa => pessoa[0]);
const mais_de_25 = pessoas.filter(pessoas => pessoas[1] > 25);

console.log(nome_pessoas);
console.log(mais_de_25);
