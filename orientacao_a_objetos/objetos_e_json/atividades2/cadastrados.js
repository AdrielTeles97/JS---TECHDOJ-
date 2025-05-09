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
            const especie = document.createElement("td");
            const nome = document.createElement("td");
            const raca = document.createElement("td");
            const idade = document.createElement("td");
            const cor = document.createElement("td");

            //Populando tabela
            id.textContent = index;
            especie.textContent = animal.especie;
            nome.textContent = animal.nome;
            raca.textContent = animal.raca;
            idade.textContent = animal.idade;
            cor.textContent = animal.cor;

            linha.append(id, especie, nome, raca, idade, cor);
            animais_base.appendChild(linha);
        });
    }
}

getAnimais();
