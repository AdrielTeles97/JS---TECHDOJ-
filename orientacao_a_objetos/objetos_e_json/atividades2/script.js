class Animal {
    constructor(especie, nome, raca, idade, cor) {
        this.especie = especie;
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.cor = cor;
    }

    pegaInformacoes() {
        const getInfo = {
            especie: this.especie,
            nome: this.nome,
            raca: this.raca,
            idade: this.idade,
            cor: this.cor,
        };
        return getInfo;
    }
}


const especie = document.querySelector("#especie");
const nome = document.querySelector("#nome");
const raca = document.querySelector("#raca");
const idade = document.querySelector("#idade");
const cor = document.querySelector("#idade");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const animais = {
        especie: especie.value,
        nome: nome.value,
        raca: raca.value,
        idade: idade.value,
        cor: cor.value
    }

    localStorage.setItem("animais", JSON.stringify([animais]));

    window.location.href = "./cadastrados.html";
})

