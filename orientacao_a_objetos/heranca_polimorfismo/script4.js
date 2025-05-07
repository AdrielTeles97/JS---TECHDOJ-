class Veiculos {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    buzinar() {
        return `${this.modelo} buzinando.`;
    }
}

class Carro extends Veiculos {
    constructor(marca, modelo, ano, cor, qtde_portas) {
        super(marca, modelo, ano, cor);
        this.qtde_portas = qtde_portas;
    }

    buzinar() {
        return `bi bi`;
    }

    subirVidro() {
        return `O carro ${this.modelo} subiu o vidro`;
    }
}

class Navio extends Veiculos {
    constructor(marca, modelo, ano, cor) {
        super(marca, modelo, ano, cor);
    }

    buzinar() {
        return `fommmmm ...`;
    }
}

const carro1 = new Carro("Fiat", "Uno", 2006, "Preto", 2);
const navio = new Navio("Sea", "OFF", 2009, "Branco");
const aviao = new Veiculos("Boeing", 777, 2020, "branco");

console.log(carro1.buzinar());
console.log(carro1.subirVidro());
console.log(navio.buzinar());
console.log(aviao.buzinar());
