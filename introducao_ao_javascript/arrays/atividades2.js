const produtos = [
    ["Mouse", 25.99],
    ["Teclado", 49.99],
    ["Monitor", 249.99],
    ["Gabinete", 249.99],
    ["Impressora", 999.99],
]

const acimaDe100 = produtos.filter(produtos => produtos[1] > 100);
console.log(acimaDe100);