class Veiculo {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    ligar() {
        return `O ${this.modelo} Ligou`;
    }

    desligar() {
        return `O ${this.modelo} Desligou!`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cor, cilindradas) {
        super(marca, modelo, ano, cor);
        this.cilindradas = cilindradas;
    }

    empinarPneu() {
        return `A moto ${this.modelo} está empinando pneu`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor, portas, vidro_eletrico) {
        super(marca, modelo, ano, cor);
        this.portas = portas;
        this.vidro_eletrico = vidro_eletrico;
    }

    cavaloDePau() {
        return `O veiculo ${this.modelo} está dando cavalo de pau`;
    }
}

const minha_moto = new Moto("Honda", "Biz", 2011, "azul", 100);
console.log(minha_moto.ligar());
console.log(minha_moto.empinarPneu());
console.log(minha_moto.desligar());

const meu_carro = new Carro("Fiat", "Uno", 2005, "Prata", 5, true);
console.log(meu_carro.ligar());
console.log(meu_carro.cavaloDePau());
console.log(meu_carro.desligar());
