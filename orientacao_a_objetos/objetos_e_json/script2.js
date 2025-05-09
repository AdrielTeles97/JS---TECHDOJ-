const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");

const formulario = document.querySelector("#formulario");

const resposta_nome = document.querySelector("#resposta_nome");
const resposta_idade = document.querySelector("#resposta_idade");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = {
        nome: nome.value,
        idade: idade.value,
    };

    localStorage.removeItem("usuario");

    localStorage.setItem("usuario", JSON.stringify(usuario));
    nome.value = "";
    idade.value = "";
    location.reload();
});

if (localStorage.getItem("usuario")) {
    const user_local = JSON.parse(localStorage.getItem("usuario"));
    resposta_nome.textContent = user_local.nome;
    resposta_idade.textContent = user_local.idade;
} else {
    document.querySelector("#error").textContent = "Nenhum usuário cadastrado!";
    document.querySelector("#error").style.color = "red";
}
