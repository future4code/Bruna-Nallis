// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura= prompt ('escreve um numero')
const largura= prompt ('escreve outro numero')

console.log(altura*largura) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual= prompt('digite o ano atual')
  const anoNascimento= prompt ('digite o ano do seu nascimeno')

  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso/(altura*altura)
  
  calculaIMC(85,1.8)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUsuario= prompt('Qual seu nome')
const idadeUsuario= prompt('QualsuaIdade?')
const emailUsuario= prompt ('Qual seu email?')
console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const corUm= prompt ('Digite uma cor favorita')
const corDois= prompt ('Digite outra cor')
const corTres= prompt ('Digite a terceira cor')
const favColor= [corUm, corDois,corTres]
console.log(favColor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const frase= string.toUpperCase()
return frase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

 const tamanho = string1.length === string2.lenght
 
 return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array [array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const troca= array[0]
array[0]=array[array.length -1]
array[array.length -1]=troca
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}