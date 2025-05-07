//Atividade
class Animal {
    constructor(nome, raca, peso, cor) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.cor = cor;
    }

    comer() {
        return `${this.nome} Está comendo`;
    }

    dormir() {
        return `${this.nome} Está dormindo!`;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca, peso, cor, adestrado) {
        super(nome, raca, peso, cor);
        this.adestrado = adestrado;
    }

    pegarBolinha() {
        return `${this.nome} Pegando a bolinha`;
    }
}

class Gato extends Animal {
    constructor(nome, raca, peso, cor) {
        super(nome, raca, peso, cor);
    }

    amassarPaozinho() {
        return `${this.nome} está amassando pãozinhoo ...`;
    }
}

class Peixe extends Animal {
    constructor(nome, raca, peso, cor, tamanho) {
        super(nome, raca, peso, cor);
        this.tamanho = tamanho;
    }
}

const cachorro = new Cachorro ("Joao", "De rua", 30, "preto", true);
console.log(cachorro.pegarBolinha());
console.log(cachorro.dormir());
console.log(cachorro.comer());

const gato = new Gato ("Felino", "de rua", 12, "Cinza");
console.log(gato.amassarPaozinho());
console.log(gato.dormir());

