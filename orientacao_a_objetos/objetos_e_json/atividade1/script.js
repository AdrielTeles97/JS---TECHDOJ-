const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
    };

    const pegaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    pegaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(pegaUsuarios));

    window.location.href = "./cadastrados.html";
});
