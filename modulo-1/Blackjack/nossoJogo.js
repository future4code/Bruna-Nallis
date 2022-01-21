
console.log('Bem vindo ao jogo BlackJack!')

let newGame= confirm('Deseja iniciar um novo jogo?')

if(newGame===true){
   let firstUserCart= comprarCarta()
   let secondUserCart= comprarCarta()
   let firstPcCart= comprarCarta()
   let secondPcCart= comprarCarta()

   let pointsUser= firstUserCart.valor + secondUserCart.valor
   let pointsPc= firstPcCart.valor + secondPcCart.valor

   console.log(`Usuário- cartas:${firstUserCart.texto} ${secondUserCart.texto} pontuação: ${pointsUser} `)
   console.log(`Pc- cartas:${firstPcCart.texto} ${secondPcCart.texto} pontuação: ${pointsPc} `)

   if(pointsUser>pointsPc){

      console.log('Você é o vencedor')

   } else if (pointsUser===pointsPc) {

    console.log('Deu empate')      
   
} else {
     console.log( 'O computador venceu')      
   }

} else {
   console.log('Fim de jogo.')
}
