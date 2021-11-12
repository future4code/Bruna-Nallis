function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  
  for(i=0, i<qtdeCarrosVendidos.length, i++)
  qtdeCarrosVendidos += qtdeCarrosVendidos* 100
   return qtdeCarrosVendidos
 
  if(qtdeCarrosVendidos>=1){
    return (valorTotalVendas*0.05)+ 2000
  }else{
    return 'R$2000'
  }
  return calculaSalario
}