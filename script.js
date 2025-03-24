
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

/*
Questão 8
function media() {
    let n1 = prompt("Qual a primeira nota?")*1;
    let n2 = prompt("Qual a segunda nota?")*1;
    let n3 = prompt("Qual a terceira nota?")*1;
    let mediaFinal = ((n1 + n2 + n3)/3.0);
    console.log("Sua média final é " + mediaFinal.toFixed(2));
}

media()
*/

/*
Questão 9
let mult3 = [];
let nmult3 = [];
let a = 0;
let b = 0;

for (let i = 1; i < 21; i++) {
    if(i % 3 == 0){
        mult3[a] = i;
        a++;
    } else {
        nmult3[b] = i;
        b++;
    }
} 

function tabelation() {
    console.log("Multiplos de 3: " + mult3);
    console.log("Não multiplos de 3: " + nmult3);
}

tabelation()
*/

/*
Questão 10
function verificarPalindromo() {
    let palavra = prompt("Qual palavra deseja saber se é um palindromo");
    let palavracontra = palavra.split('').reverse().join('');
    
    if(palavra == palavracontra) {
        console.log("Essa palavra é um palindromo");
    } else {
        console.log("Essa palavra não é um palindromo");
    }
}

verificarPalindromo()
*/

/*
Questão 11
function verificarSinal() {
    let num = prompt("Qual o numero que deseja verificar?")
    if(num > 0){
        console.log("O número é positivo")
    } else if(num < 0) {
        console.log("O número é negativo")
    } else {
        console.log("O número é zero")
    }
}

verificarSinal()
*/

/*
Questão 12
function converterTemperatura() {
    const temp = prompt("qual temperatura em celius deseja converter?")
    let tempFaren = (temp*1.8)+32;
    console.log("A temperatura" + temp, "em celsius, é igual a " +tempFaren," em Fahrenheit")
}

converterTemperatura()
*/

/*
Questão 13
let i13 = 1;
let soma = 0;

while (i <= 100) {
  soma = i + soma;
  i++;
}

console.log(soma);
*/

/*
Questão 14
const troca = prompt("escreva uma frase que tenha a palavra azul")

function substituirPalavra() {
  console.log(troca.replace(/Azul/g || /azul/g, "Vermelho"));
}

substituirPalavra();
*/

/*
Questão 15
let palav = prompt("Digite uma palavra");

function verificarTamanho (palav) {
  if(palav.length > 10) {
    console.log("Tem mais de 10 caracteres aí");
  } else {
    console.log("Tem menos de 10 caracteres aí");
  }
}

verificarTamanho ();
*/

/*
Questão 16
let nome = prompt("Digite seu nome");
const saudacao = "Bem-vindo(a)"

function saudacao (nome, saudacao) {
  console.log(saudacao, nome);
}

saudacao();
*/

/*
Questão 17
let nome = prompt("Digite seu nome");
const saudacao = "Bem-vindo(a)"

function saudacao (nome, saudacao) {
  console.log(saudacao, nome);
}

saudacao();
*/

/*
Questão 18
let nota = prompt("Digite sua nota final");

function verificarAprovacao (nota) {
  if(nota >= 6){
    console.log("Aprovado(a)");
  } else {
    console.log("Reprovado(a)");
  }
}
  
verificarAprovacao ();
*/





