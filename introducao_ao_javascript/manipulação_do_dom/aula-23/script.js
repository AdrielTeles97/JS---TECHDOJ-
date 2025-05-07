const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const errorn1 = document.querySelector("#errorn1");
const errorn2 = document.querySelector("#errorn2");
let nota1Errada = false;
let nota2Errada = false;

nota1.addEventListener("input", (e) => {
    const nota_digitada = Number(e.target.value);
    if (nota_digitada > 10 || nota_digitada < 0) {
        errorn1.textContent = `Nota Inválida!`;
        errorn1.style.color = "red";
        nota1Errada = true;
    } else {
        errorn1.textContent = "";
        nota1Errada = false;
    }
});

nota2.addEventListener("input", (e) => {
    const nota_digitada = Number(e.target.value);
    if (nota_digitada > 10 || nota_digitada < 0) {
        errorn2.textContent = `Nota Inválida!`;
        errorn2.style.color = "red";
        nota2Errada = true;
    } else {
        errorn2.textContent = "";
        nota2Errada = false;
    }
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nota1Errada || nota2Errada) {
        resultado.textContent = `Não foi possível calcular a média!`;
        resultado.style.color = "red";
    } else {
        const media = (Number(nota1.value) + Number(nota2.value)) / 2;
        if (media >= 7) {
            resultado.textContent = `Aprovado com a média: ${media.toFixed(1)}`;
            resultado.style.color = "green";
        } else {
            resultado.textContent = `Reprovado com a média: ${media.toFixed(
                1
            )}`;
            resultado.style.color = "red";
        }
    }
    nota1.value = "";
    nota2.value = "";
    nota1.focus();
});
