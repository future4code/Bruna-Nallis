// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
retornaTamanhoArray[1,2,3,4,5]

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido[1,2,3]

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=> a-b)
}
retornaArrayOrdenado[3,2,1,4,7]
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    }
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) { 
}


// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let maior = 0 
    for(let i=0; i < array.length; i++){
         if (array[i] > maior){ maior = array[i] } 
} return maior 
}
console.log
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    if (num1>num2){
        maior= num1
        menor= num2
    }else if (num1<num2) {
        maior=num2
        menor=num1      
    }
        let objeto = {
    maiorNumero = maior,
    maiorDivisivelPorMenor = maior % menor === 0,
    diferenca = maior-menor
}
}
console.log(`maior numero:${maiorNumero}, maiorDivisivelPorMenor:${maiorDivisivelPorMenor}, diferenca:${diferenca}`)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if( ladoA===ladoB && ladoB===ladoC && ladoC===ladoA){
    return 'É um triangulo equilatero'
} else if( ladoA===ladoB || ladoA===ladoC || ladoB===ladoC){
    return "Isoceles"
} else if (ladoA !== ladoB && ladoA !== ladoB && ladoB !== ladoC){
    return escaleno
}
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let menorNUm= Math.min(...array)
    let maiorNUm= Math.max(...array)

    const index= array.splice(array.indexOf(maiorNUm))
    const index2= array.splice(array.indexOf(menorNUm))

    let segundoMenor= Math.min(...array)
    let segundoMaior= Math.max(...array)

    console.log(segundoMaior, segundoMenor)
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const assistirFilme={ filme}
console.log(`Venha assistir ${filme.nome}, de 2006, dirigido por ${filme.diretor}, e estrelado por${filme.atores}`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}