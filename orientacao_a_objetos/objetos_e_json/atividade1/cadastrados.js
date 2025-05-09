function listarUsuarios() {
    const resultado_consulta = document.querySelector("#resultado_consulta");
    const getUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (getUsuarios) {
        getUsuarios.forEach((user, indice) => {
            //Cria os elementos
            const linha = document.createElement("tr");
            const nome = document.createElement("td");
            const email = document.createElement("td");
            const senha = document.createElement("td");
            const botao = document.createElement("button");

            //Configura os elementos
            nome.textContent = user.nome;
            email.textContent = user.email;
            senha.textContent = user.senha;
            botao.textContent = "Excluir";
            botao.classList.add("btn-red");

            botao.setAttribute("data-indice", indice);
            resultado_consulta.append(linha, nome, email, senha, botao);
        });
    } else {
        resultado_consulta.innerHTML = `<tr><td colspan='4'>Nenhum usuário encontrado!</td></tr>`;
    }

    const excluir = document.querySelectorAll(".btn-red");
    excluir.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Obter o índice do usuário a partir do atributo data-indice
            const indice = parseInt(btn.getAttribute("data-indice"));
            // Recuperar o array, remover o usuário específico e salvar novamente
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            usuarios.splice(indice, 1); // Remove o usuário no índice esp
            // Salvar o array atualizado no localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            const sucesso = document.querySelector("#sucess");
            sucesso.classList.remove("escondido");
            sucesso.textContent = `Usuário removido com sucesso`;
            setTimeout(() => {
                location.reload();
            }, 3000);
        });
    });
}

listarUsuarios();
