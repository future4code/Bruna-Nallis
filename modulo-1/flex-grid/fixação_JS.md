
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  if (arrayDeNumeros.filter((numero) => (numero === numeroEscolhido)).length){
  return `O numero ${numeroEscolhido} aparece ${arrayDeNumeros.filter.length} x`  
  } else if (arrayDeNumeros.filter((numero) => (numero === 3))){
    return 'Numero não encontrado'
  }
}