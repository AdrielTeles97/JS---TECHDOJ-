const formulario = document.querySelector("#formulario");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const resultado_imc = document.querySelector("#resultado-imc");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const altura_tratada = Number(altura.value);
    const peso_tratado = Number(peso.value);
    const imc = peso_tratado / (altura_tratada * altura_tratada);
    resultado_imc.textContent = `O seu IMC é ${imc.toFixed(2)}`;
});
