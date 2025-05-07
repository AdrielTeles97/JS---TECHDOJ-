// for (let i; i <= 5; i++) {
//     const numero = Number(prompt("Digite um Número!"))
//     console("RODANDO!")
// }



let quantidade = 1;
for (let i = 1; i <= 2; i++) {
    const numero = Number(prompt(`Digite o ${i}º número`));
    if (numero === 6) {
        break;
        console.log("Saindo...");
    }
    if (numero % 2 === 0) {
        alert(`O número ${numero} é par\n volta: ${quantidade}`);
        quantidade++;
    } else {
        alert(`O número ${numero} é ímpar.\n volta: ${quantidade}`);
        quantidade++;
    }
}


const msg = {
    texto: "É tetra! ..."
}
document.querySelector("#msg").innerHTML = msg.texto;