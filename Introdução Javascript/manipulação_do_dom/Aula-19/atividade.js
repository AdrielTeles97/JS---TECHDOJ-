const formulario = document.querySelector("#formulario");
const hora = document.querySelector("#hora");
const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");
const imagem = document.querySelector("#imagem");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const hora_formatada = Number(hora.value);
    hora.style.border = "";
    mensagem.style.color = "";
    if (hora_formatada >= 0 && hora_formatada <= 23) {
        if (hora_formatada >= 4 && hora_formatada < 12) {
            mensagem.textContent = `Olá, ${nome.value}. Bom dia.`;
            imagem.src =
                "https://media.istockphoto.com/id/824800468/pt/foto/sun-on-blue-sky-with-clouds.jpg?s=612x612&w=0&k=20&c=4fLHc5_ArzYG0J4yDGiUzLmwYGVfaE0GsS7zcSzMOe8=";
            imagem.alt = "Dia ensolarado";
        } else if (hora_formatada >= 12 && hora_formatada < 18) {
            mensagem.textContent = `Olá, ${nome.value}. Boa tarde.`;
            imagem.src =
                "https://img.freepik.com/fotos-gratis/foto-de-baixo-angulo-das-nuvens-no-ceu-colorido-capturada-no-crepusculo_181624-29111.jpg?semt=ais_hybrid&w=740";
            imagem.alt = "Final de Tarde";
        } else {
            mensagem.textContent = `Olá, ${nome.value}. Boa noite.`;
            imagem.src =
                "https://www.zapimoveis.com.br/blog/wp-content/uploads/2024/10/avenida-paulista-609x406.jpg.webp";
            imagem.alt = "Noite Paulista";
        }
        formulario.reset();
        document.querySelector("#nome").focus();
    } else {
        hora.style.border = "1px solid red";
        mensagem.textContent = "ERROR! Hora inválida!";
        mensagem.style.color = "red";
    }
});
