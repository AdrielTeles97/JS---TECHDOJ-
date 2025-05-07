class Usuario {
    #email;
    #senha;
    constructor(email, senha) {
        this.#email = email;
        this.#senha = senha;
    }

    get email() {
        return this.#email;
    }

    set email(novo_email) {
        this.#email = novo_email;
        return `Email alterado com sucesso!`;
    }

    set senha(nova_senha) {
        if (nova_senha.length >= 8) {
            this.#senha = nova_senha;
            console.log(`Senha alterado com sucesso!`);
        } else {
            console.log(`Senha tem que ter no mínimo 8 caracteres`);
        }
    }
}

const usuario1 = new Usuario("adriel@teste.com.br", "12244bahc");
console.log(usuario1.email);
console.log(usuario1.email);
usuario1.senha = "1234";
usuario1.senha = "123456789";
