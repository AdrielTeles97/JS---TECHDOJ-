const formulario = document.querySelector("#formulario");
const tarefa = document.querySelector("#tarefa");
const conteudo = document.querySelector("#conteudo");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const check = document.createElement("input");
    check.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = tarefa.value;
    const button = document.createElement("button");
    button.textContent = "Excluir";
    const br = document.createElement("br");

    conteudo.append(check, span, button, br);
    tarefa.value = "";
    tarefa.focus();

    check.addEventListener("change", () => {
        if (check.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
    });

    button.addEventListener("click", () => {
        check.remove()
        span.remove();
        button.remove();
    });
});
