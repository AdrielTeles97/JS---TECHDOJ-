class Cliente {
    #nome;
    #email;
    #senha;
    constructor(nome, email, senha) {
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
    }

    logarNoSistema() {
        return `${this.#nome} logado!`;
    }

    set email(novo_email) {
        this.#email = novo_email;
        console.log(`Email alterado para ${novo_email}`);
    }

    set senha(nova_senha) {
        if (nova_senha <= 8) {
            this.#senha = nova_senha;
            console.log(`Senha alterada`);
        } else {
            console.log(`A senha deve ter no  mínimo 8 caracteres`);
        }
    }
}

const usuario = new Cliente("Adriel", "adriel@teste.com.br", "233244");
console.log(usuario.logarNoSistema());

usuario.email = "adriel2@gmail.com";
usuario.senha = "23443323";
