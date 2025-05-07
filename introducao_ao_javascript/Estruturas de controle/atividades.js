//Atividade 1

// let contador;
// for (let i = 1; i <= 10; i++) {
//     const numeros_digitados = Number(prompt(`Digite o ${i}º número`));
//     if (i === 1) {
//         contador = numeros_digitados;
//     } else if (numeros_digitados < contador) {
//         contador = numeros_digitados;
//     }
// }
// alert(`O menor número digitado foi ${contador}`);


//Atividade 02
// while(true) {
//     const notaUsuario = Number(prompt("Digite uma nota entre 0 e 10"));
//     if (notaUsuario >= 0 && notaUsuario <= 10) {
//         alert("Nota registrada!");
//         break;
//     } else {
//         alert("Por favor ... Digite uma nota entre 0 e 10.")
//     }
// }

//Atividade 3 - 
// Faça um programa que pede para o usuário digitar uma senha e verifique se essa senha possui letras e número e mostre uma mensagem respectiva.
const senhaUsuario = prompt("Digite uma senha: ");
let temLetra = false;
let temNumeros = false;

const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const todosOsNumeros = "0123456789";

//Verificar se senha tem letras
for (let i = 0; i < senhaUsuario.length; i++) {
    for (let j = 0; j < alfabeto.length; j++) {
        if (senhaUsuario[i].toLowerCase() === alfabeto[j]) {
            temLetra = true;
            break; 
        }
    }
    //Não consultar novamente!
    if (temLetra) {
        break;
    }
}

//Verificar se senha tem numeros
for (let k = 0; k < senhaUsuario.length; k++) {
    if(todosOsNumeros.includes(senhaUsuario[k])) {
        temNumeros = true;
        break;
    }
}

if (temLetra && temNumeros) {
    alert("Senha ok! contém letras e números!");
} else if (temLetra) {
    alert("Sua senha precisa ter letras e números");
} else if (temNumeros) {
    alert("Sua senha senha precisa conter letras!");
} else {
    alert("Sua senha precisa conter 1 letra e 1 numero!");
}



