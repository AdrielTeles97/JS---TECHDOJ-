const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");

nome.addEventListener("blur", (e) => console.log(e.target.value));
