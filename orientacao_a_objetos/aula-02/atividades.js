// // ATIVIDADE 1
// class Gato {
//     constructor (nome, raca, peso) {
//         this.nome = nome;
//         this.raca = raca;
//         this.peso = peso;
//     }

//     miar() {
//         return `${this.nome}: miau`;
//     }

//     dormir() {
//         return `${this.nome}: zzzzz ...`;
//     }

//     comer() {
//         return `${this.nome}: Nhami nhami`;
//     }
// }

// const gato1 = new Gato("Frederico", "Siamês", 8);
// const gato2 = new Gato("João", "Sagrado da Birmânia", 10);
// console.log(gato1.miar());
// console.log(gato2.dormir());
// console.log(gato1.comer());

//ATIVIDADE 2
// class Motos {
//     constructor (marca, modelo, cor, cilindrada) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.cor = cor;
//         this.cilindrada = cilindrada;
//     }

//     acelerar() {
//         return `${this.modelo} acelerando ...`;
//     }

//     freiar() {
//         return `${this.modelo} freiando ...`;
//     }
// }

// const moto1 = new Motos("Honda", "biz", "preta", 110);
// const moto2 = new Motos("Yamaha", "Fz 15", "azul", 150);
// console.log(moto1.acelerar());
// console.log(moto2.acelerar());
// console.log(moto2.freiar());

//Atividade 3
class Funcionario {
    constructor(nome, cpf, endereco, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.salario = salario;
    }

    baterPonto() {
        return `${this.nome} \nPonto registrado!`;
    }

    almocar() {
        return `${this.nome} comendo...`;
    }

    receberSalario(valor) {
        this.salario = valor;
        return `Salário ${valor} \n Pago!`;
    }
}

const funcionario1 = new Funcionario(
    "Andrei",
    "020.334.544.87",
    "Rua xxsads, 24",
    1500
);
console.log(funcionario1.almocar());
console.log(funcionario1.baterPonto());
console.log(funcionario1.receberSalario(1600));
