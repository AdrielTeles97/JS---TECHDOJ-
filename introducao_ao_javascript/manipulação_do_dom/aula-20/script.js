const fruta = document.querySelector("#fruta");
const formulario = document.querySelector("#formulario");
const lista_de_frutas = document.querySelector("#lista_de_frutas");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = fruta.value;
    lista_de_frutas.appendChild(li);
    fruta.value = "";
    fruta.focus();
});
