class Funcionarios {
    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    batePonto() {
        return `Funcionário ª ${this.nome} bateu o ponto`;
    }
}

class Gerente extends Funcionarios {
    constructor(nome, cpf, salario) {
        super(nome, cpf, salario);
    }

    demitir(nome) {
        return `O gerente demitiu o ${nome}`;
    }

    contratar(nome) {
        return `O gerente contratou o ${nome}`;
    }

    batePonto() {
        return `Gerente não bate ponto!`;
    }
}

class OperadorCaixa extends Funcionarios {
    constructor(nome, cpf, salario, numero_caixa) {
        super(nome, cpf, salario);
        this.numero_caixa = numero_caixa;
    }
}

const gerente = new Gerente("Maicon", "233.323.445.89", 2000);
console.log(gerente.contratar("João"));
console.log(gerente.demitir("João"));

const maria = new OperadorCaixa("Maria", "3923.323.32", 1600, 1);
const joana = new OperadorCaixa("Joana", "33423.323.32", 1600, 2);
const vera = new OperadorCaixa("Vera", "3223.323.32", 1600, 3);

console.log(maria.batePonto());
console.log(joana.batePonto());
console.log(vera.batePonto());
console.log(gerente.batePonto());
