class Animal {
    constructor (nome, raca, cor) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;    
    }

    emitirSom() {
        return "Som indefinido";
    }
}

class Cachorro extends Animal {
    constructor(nome, raca, cor) {
        super(nome, raca, cor)
    }

    pegarBolinha() {
        return `Pegou a bolinha`;
    }

    emitirSom() {
        return `Au au`;
    }
}


class Gato extends Animal {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }

    emitirSom() {
        return `Miau`
    }
}

const cachorro = new Cachorro("Bob", "Vira lata", "caramelo");
console.log(cachorro.pegarBolinha());
console.log(cachorro.emitirSom());

const gato1 = new Gato ("Florzinha", "Angorá", "Bege");
console.log(gato1.emitirSom());

const giraffa = new Animal ("Maria", "Pescoço Curto", "Amarela");
console.log(giraffa.emitirSom());




