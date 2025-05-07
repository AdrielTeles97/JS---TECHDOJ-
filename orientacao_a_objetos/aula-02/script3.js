class Conta {
    constructor(titular, numero, agencia, saldo) {
        this.titular = titular;
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor >= 10) {
            this.saldo += valor;
            return ` Novo valor adicionado. R$${valor} \n Saldo Atual: R$${this.saldo}`;
        } else {
            return `O valor mínimo para depósito é: R$10`;
        }
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return ` Valor sacado de sua conta R$${valor}. \n Saldo Atual: R$${this.saldo}`;
        } else {
            return ` Saldo Insuficiente!`;
        }
    }

    verificarSaldo() {
        return ` Saldo Atual: R$${this.saldo}`;
    }
}

const cliente = new Conta("Adriel", 2549, 1314, 1000);
console.log(cliente.depositar(1000));
console.log(cliente.sacar(5000));
console.log(cliente.verificarSaldo());
