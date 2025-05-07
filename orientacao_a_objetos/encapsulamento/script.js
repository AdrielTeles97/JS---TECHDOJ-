//Atividade
class ContaBancaria {
    #titular;
    #saldo;
    constructor(titular, saldo) {
        this.#titular = titular;
        this.#saldo = saldo;
    }

    depositar(valor) {
        if (valor >= 1) {
            this.#saldo += valor;
            return `Novo Saldo: ${this.#saldo}`;
        } else {
            return `Valor inválido`;
        }
        
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return `Saque realizado com sucesso!`;
        } else {
            return `Saldo insuficiente!`;
        }
    }

    get consultarSaldo() {
        return `Saldo atual: ${this.#saldo}`;
    }

    get consultarTitular() {
        return `Titular: ${this.#titular}`;
    }

    set titular(novo_titular) {
        this.#titular = novo_titular;
        return `Titular alterado com sucesso`    
    }

}

const conta = new ContaBancaria("Adriel", 2000);
console.log(conta.depositar(300));
console.log(conta.consultarSaldo);
console.log(conta.sacar(200));
console.log(conta.consultarTitular);
conta.titular = "João da Silva";
console.log(conta.consultarTitular);
console.log(conta.consultarSaldo);


//Para consultar ou alterações privadas usamos get e set
