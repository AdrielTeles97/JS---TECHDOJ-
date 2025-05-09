function getAnimais() {
    const animais_base = document.querySelector("#animais_base");
    const todos_animais = JSON.parse(localStorage.getItem("animais"));
    if (todos_animais === null || todos_animais === 0) {
        const heading = document.createElement("tr");
        const linha = document.createElement("td");
        linha.innerHTML = `<td colspan="6">Nenhum animal encontrado!</td>`;
        animais_base.append(heading, linha);
    } else {
        todos_animais.forEach((animal, index) => {
            //CRIANDO ELEMENTOS
            const linha = document.createElement("tr");
            const id = document.createElement("td");
            id.setAttribute("data-index", index);
            const especie = document.createElement("td");
            const nome = document.createElement("td");
            const raca = document.createElement("td");
            const idade = document.createElement("td");
            const cor = document.createElement("td");
            const button = document.createElement("button");
            button.classList.add(
                "btn",
                "bg-rose-500",
                "hover:bg-rose-400",
                "ease-out",
                "py-2",
                "px-4",
                "btn-excluir"
            );
            button.textContent = "Excluir";

            //Populando tabela
            id.textContent = index;
            especie.textContent = animal.especie;
            nome.textContent = animal.nome;
            raca.textContent = animal.raca;
            idade.textContent = animal.idade;
            cor.textContent = animal.cor;

            linha.append(id, especie, nome, raca, idade, cor, button);
            animais_base.appendChild(linha);
        });
    }
}

window.onload = () => {
    function excluirPorId() {
        const monitorBotao = document.querySelectorAll(".btn-excluir");
        monitorBotao.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const animais =
                    JSON.parse(localStorage.getItem("animais")) || [];
                animais.splice(index, 1);
                localStorage.setItem("animais", JSON.stringify(animais));
                location.reload();
            });
        });
    }

    excluirPorId();
};

getAnimais();
