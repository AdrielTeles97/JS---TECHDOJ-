const animais = document.querySelectorAll(".animais");
const resultado = document.querySelector("#resultado");

animais.forEach((animal_vez) => {
    animal_vez.addEventListener("click", () => {
        if (animal_vez.textContent.toLowerCase() === "cachorro") {
            resultado.src =
                "https://img.freepik.com/fotos-gratis/imagem-vertical-de-foco-raso-de-um-filhote-de-cachorro-golden-retriever-fofo-sentado-em-um-gramado_181624-27259.jpg?semt=ais_hybrid&w=740";
            resultado.alt = "Imagem de cachorro";
        } else if (animal_vez.textContent.toLowerCase() === "gato") {
            resultado.src =
                "https://www.zooplus.pt/magazine/wp-content/uploads/2021/08/gatos_rua_1.jpeg";
            resultado.alt = "Imagem de um gato";
        } else if (animal_vez.textContent.toLowerCase() === "papagaio") {
            resultado.src =
                "https://www.petz.com.br/blog/wp-content/uploads/2022/05/como-cortar-unha-de-papagaio-2.jpg";
            resultado.alt = "Imagem de um papagaio";
        } else if (animal_vez.textContent.toLowerCase() === "coelho") {
            resultado.src =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwb35KC2xuCdU9ynQkrdz_-v6_tHGFiwedBw&s";
            resultado.alt = "Imagem de um coelho";
        } else if (animal_vez.textContent.toLowerCase() === "hamster") {
            resultado.src =
                "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/11/04/2068666766-hamsters.jpg";
            resultado.alt = "Imagem de um hamster";
        }
    });
});
