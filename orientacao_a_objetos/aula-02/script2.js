class Fruta {
    constructor(nome, preco, qtde_estoque) {
        this.nome = nome;
        this.preco = preco;
        this.qtde_estoque = qtde_estoque;
    }

    adicionarNoEstoque(qtde_de_frutas) {
        this.qtde_estoque += qtde_de_frutas;
        return `Estoque atualizado, estoque atual: ${this.qtde_estoque} ${this.nome}s`;
    }

    removerDoEstoque(qtde_de_frutas) {
        if (this.qtde_estoque >= qtde_de_frutas) {
            this.qtde_estoque -= qtde_de_frutas;
            return `Estoque atualizado, estoque atual: ${this.qtde_estoque} ${this.nome}s`;
        } else {
            return `Não possuimos essa quantidade de frutas no estoque.`;
        }
    }
}

const fruta1 = new Fruta("Melância", 19.5, 37);
const fruta2 = new Fruta("Abacaxi", 12.99, 48);

console.log(fruta1.adicionarNoEstoque(20));
console.log(fruta2.adicionarNoEstoque(100));

console.log(fruta1.removerDoEstoque(40));
console.log(fruta2.removerDoEstoque(200));
