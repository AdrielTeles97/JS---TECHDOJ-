class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligado = false;
    }

    exibirInformacoes() {
        return ` Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano Lançamento: ${this.ano} \n Cor: ${this.cor}`;
    }

    ligar() {
        if (this.ligado) {
            return `O carro ${this.modelo} já está ligado!`;
        } else {
            this.ligado = true;
            return `O carro: ${this.modelo} ligou!`;
        }    
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            return `O carro ${this.modelo} desligou!`;
        } else {
            return `O carro ${this.modelo} já está desligado!`;
        }
    }
}

const carro1 = new Carro("Fiat", "Uno", 2005, "Preto");
console.log(carro1.exibirInformacoes());
console.log(carro1.ligar());
console.log(carro1.desligar());
console.log(carro1.desligar());

