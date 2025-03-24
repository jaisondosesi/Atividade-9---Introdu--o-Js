
/*
Questão - N1
/*

console.log('hello world');
let numero = prompt('Digite seu número');
function verificarPar(numero){
        if(numero % 2 === 0){
            console.log(numero + " é igual a par.");
        }else{ 
            console.log(numero + " é igual a ímpar");
        }
}
verificarPar(numero);
*/

/*
Questão N2
/*

let n1 = parseFloat(prompt('Escreva n1:'))
let n2 = parseFloat(prompt('Escreva n2:'))

function calcular(num1, num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    if (num2 === 0) {
        console.log("Não da pra dividir por 0!")
    }else {
        const divisao = num1 / num2;
        console.log(divisao)
    }
    
    }
calcular(n1, n2);
*/

/*
Questão N3
/*

console.log("Contadora")
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
 }
 */

/*
Questão 4
console.log('Strings')

    let texto = prompt('Digite sua frase');
    function inverter(texto){
        console.log(texto.split("").reverse().join(""));
    }
    inverter(texto);
/*


 /*
 Questão 05

 let text = prompt('Digite uma frase');
function contarCaractere(text) {
 let length = text.length;}
console.log(text.length)
*/

/*
Questão 7
console.log("Mensagem personalizada");
let nome = prompt("Digite seu nome");
let mensagem= ("Olá! ");
function mensagemPersonalizada(nome,mensagem){
    console.log(mensagem + nome);
}
mensagemPersonalizada(nome, mensagem);
 */

/*
Questão 6
const carro = {
    marca: "Porsche",
    modelo: "911 GT3 RS",
    ano: 2020,
    printModel: function () {
        console.log("O modelo do carro é " + this.modelo)
    }
}

carro.printModel()  
*/





