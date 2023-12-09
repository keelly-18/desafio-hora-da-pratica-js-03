// Criar uma função que exibe "Olá, mundo!" no console.
function exibirOla(){
    console.log("Ola, mundo!");
}
exibirOla();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function recebeNome(nome){
    console.log(`Olá, ${nome}!`);
}
recebeNome("Kelly");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calculaDobro(numero){
    return numero *2;
}

let resultado = calculaDobro(5);
console.log(resultado);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(a, b, c){
    return(a + b + c) /3
}
let resultadoMedia = media(8, 9, 6);
console.log(resultadoMedia);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(a, b){
    return a > b ? a : b;
}
let maiorNumero = maior(20, 50);
console.log(maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function quadrado(numer){
    return numero * numero;
}

let resultado2 = quadrado(2)
console.log(resultado);