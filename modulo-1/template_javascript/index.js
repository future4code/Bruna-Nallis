//Exercicios de interpretação de codigo

/*Execicio 1
a. Falso; b. Falso; c. Verdadeiro; d.boleano;*/

/*Exercicio 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma= Number (primeiroNumero) + Number (segundoNumero)

console.log(soma)

Resposta: O colega esqueceu de colocar o objeto Number antes das variaveis soma.*/

//Exercicios de escrita de código

/*Exercicios 1
const idadeDoUsuario= prompt ('Digite sua idade')
const idadeDoBff= prompt ('Digite a idade do seu BFF')
const idade= Number (idadeDoUsuario) >  Number (idadeDoBff)
console.log ('Sua idade é maior do que a do seu BFF?', idade)
console.lg ( idadeDoUsuario !== idadedoBFF)*/

/*Exercicio 2
const numeroPar= prompt ('insira um numero par')
const restoDivisao= Number (numeroPar) % 2
console.log (restoDivisao)
Resposta: Qualquer numero par divido por 2 tem resto 0
e qualquer numero impar tem resto 1*/

/*Exercicio 3
const idadeDoUsuario= prompt ('Quantos anos voce tem?')
const idadeMeses= Number (idadeDoUsuario) *12
console.log ('Sua idade em meses é,', idadeMeses)
const idadeDias= Number (idadeDoUsuario) *365
console.log('Sua idade em dias é,', idadeDias)
const idadeHoras= Number (idadeDoUsuario) *8760
console.log('Sua idade em horas é,', idadeHoras)*/

/*Exercicio 4
const numeroUM= prompt ('Digite um numero')
const numeroDois= prompt('Digite outro numero')
let maior= Number (numeroUM) > Number (numeroDois)
let igual= Number (numeroUM) == Number (numeroDois)
console.log ('O primero numero é maior que o segundo?', maior)
console.log ('O primeiro numero é igual oo segundo?', igual)
let resto= Number(numeroUM)% Number (numeroDois)
if (resto == 0) {
console.log('O primeiro numero é divisivel pelo segundo?',true)}
 else { console.log(false)}
 let restoDois= Number(numeroDois)% Number (numeroUm)
if (restoDois == 0) {
console.log('O segundo numero é divisivel pelo segundo?',true)}
 else { console.log(false)}*/
            
//Desafio
/*1
const kelvin = (77 - 32)*(5/9) + 273.15
console.log ( kelvin, 'K')
const  fahrenheit= (77 - 32) * 5/9
console.log (fahrenheit, 'F') 
const celcius= (80)*(9/5) + 32
console.log (celcius, 'C')
const celCius= prompt ('insira o numero em graus celcius')
let fahrenheit= (Number(celCius) * 9/5) + 32
let kelvin=  Number(celCius) + 273.15
console.log(fahrenheit, "f", kelvin, "k")*/

//2
const valorResidencia= 280
const desconto = 15/100
const qResidencia = (0.05*280)*desconto
const residencia= valorResidencia-qResidencia
console.log (residencia)

