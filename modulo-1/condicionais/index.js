//Interpretação de codigo

//Exercicio 1- 
//a)O codigo faz uma divisão de numeros, onde o usuario pode escolher um numero
// se o resto da divisão for igual a zero o teste exibe a mensagem "Passou no teste", caso 
//contraio exibe a mensagem 'Não passou no teste'.
//b) Imprime numeros pares para exibir "passou no teste"
//c) Imprime numeros impares para exibir "Não passou no teste"

//Exercicio 2-
//a- O codigo foi feito para informar o preço de cada fruta do mercado
//b-""O preço da fruta, maçã é, R$ 2.25, preco"
//c- Ia aparecer o preço final, que no caso é "5".

//Exercicio 3-
 //a)está pedindo ao usuario para digitaer um numero
 //b)Se fosse 10 exibiria a mensagem 'passou no teste'; Se fosse -10 daria erro
 //c)O erro acontece por não usar a ELSE para atribuir uma resposta caso o numero seja menor que zero

//Escrita de codigo

//Exercicio1

/* const boraDirigir= Number prompt('insira sua idade')

vrumVrum=()=>{
    if (boraDirigir>=18){
        console.log ('Voce pode dirigir')
    } 
    else { 
        console.log ('Você não pode dirigir')
    }
}

vrumVrum(boraDirigir) */

//Exercicio2
 /* const horarioDeEstudo= prompt('Qual seu turno de estudos? Digite M para matiturno, V para vespertino e N para noturno').toUpperCase()

 turnoEstudante=()=>{
     if(horarioDeEstudo==='M'){
         console.log ('Bom dia.')
     } else 
     if(horarioDeEstudo==='V'){
         console.log ('Boa tarde.')
     } else 
     if(horarioDeEstudo==='N'){
         console.log ('Boa noite.')
     }
 }

 turnoEstudante(horarioDeEstudo) */

 //Exercicio3
/*  const horarioDeEstudo= prompt('Qual seu turno de estudos? Digite M para matiturno, V para vespertino e N para noturno').toUpperCase()

 switch(horarioDeEstudo){
     case('M'): 
     console.log('Bom dia.')
     break
        case('V'):
        console.log('Boa tarde.')
        break
            case('N'):
            console.log('Boa noite.')
            break
                default: console.log('Turno não encontrado')
 } */

 //Exercicio4

//  const generoFantasia=prompt('esse filme é do genero fantasia').toLowerCase()==='sim'
//  const ingressoBarato=prompt('o ingresso custa menos de R$15').toLowerCase()==='sim'

//   let partiuFilme= ()=>{

//      if(generoFantasia&&ingressoBarato){
//           console.log('Bom filme')
//       } 
//       else {
//           console.log('Escolha outro filme')
//       }
//   }

// partiuFilme(generoFantasia,ingressoBarato)

//Desafio
/*  const generoFantasia=prompt('esse filme é do genero fantasia?').toLowerCase()==='sim'
const ingressoBarato=Number(prompt('quanto custa o ingresso?'))
const lanchinho= prompt('Escolha um lanche entre:batata,pipoca ou acai, de acompanhamento')||'batata'||'pipoca'||'acai'
   let partiuFilme= ()=>{

      if(generoFantasia&&ingressoBarato<15){
        console.log(`Bom filme. Aproveite seu/sua ${lanchinho}`)
       } else 
        {
                console.log('Escolha outro filme')
            }
   }

 partiuFilme(generoFantasia,ingressoBarato,lanchinho) */
 
 //Desafio2
 /* let nomeDoJogador= prompt('Qual seu nome?').toLocaleUpperCase()
 let tipoDeJogo= prompt('Qual joga gostaria de jogar?Digite IN=internacionais e DO=Domesticos').toUpperCase()
 let etapaDoJogo=prompt('Qual etapa sera jogada? Escolha ente SF=semi final, DT=terceiro lugar, FI=final').toUpperCase()
 let categoria= Number(prompt('Qual sua categoria? 1,2,3 ou 4.'))
 let quantidadeDeINgresso= Number(prompt ('Quantos ingressos deseja comprar?'))

 const valorTotal=()=>{
     if (tipoDeJogo==='DO'&&etapaDoJogo==='SF'&&categoria===1){
         console.log(1.320*quantidadeDeINgresso)
     } else 
         if(tipoDeJogo==='DO'&&etapaDoJogo==='SF'&&categoria===2){
         console.log(880*quantidadeDeINgresso)
        } else
            if(tipoDeJogo==='DO'&&etapaDoJogo==='SF'&&categoria===3){
                console.log(550*quantidadeDeINgresso)
            }else
                if (tipoDeJogo==='DO'&&etapaDoJogo==='SF'&&categoria===4){
                    console.log(220*quantidadeDeINgresso)
                }else
                    if(tipoDeJogo==='DO'&&etapaDoJogo==='DT'&&categoria===1){
                        console.log(660*quantidadeDeINgresso)
                    }else
                        if(tipoDeJogo==='DO'&&etapaDoJogo==='DT'&&categoria===2){
                        console.log(440*quantidadeDeINgresso)
                        }else
                            if(tipoDeJogo==='DO'&&etapaDoJogo==='DT'&&categoria===3){
                            console.log(330*quantidadeDeINgresso)
                            }else
                                if(tipoDeJogo==='DO'&&etapaDoJogo==='DT'&&categoria===4){
                                console.log(170*quantidadeDeINgresso)
                                } else
                                    if(tipoDeJogo==='DO'&&etapaDoJogo==='FI'&&categoria===1){
                                    console.log(1.980*quantidadeDeINgresso)
                                    }else
                                        if(tipoDeJogo==='DO'&&etapaDoJogo==='FI'&&categoria===2){
                                            console.log(1.320*quantidadeDeINgresso)
                                        }else
                                            if(tipoDeJogo==='DO'&&etapaDoJogo==='FI'&&categoria===3){
                                            console.log(880*quantidadeDeINgresso)
                                            }else
                                                if(tipoDeJogo==='DO'&&etapaDoJogo==='FI'&&categoria===4){
                                                console.log(330*quantidadeDeINgresso)
                                                }else
                                                    if(tipoDeJogo==='IN'&&etapaDoJogo==='SF'&&categoria===1){
                                                    console.log(1.320*4.2*quantidadeDeINgresso)
                                                    }else
                                                        if(tipoDeJogo==='IN'&&etapaDoJogo==='SF'&&categoria===2){
                                                        console.log(880*4.2*quantidadeDeINgresso)
                                                        }else
                                                            if(tipoDeJogo==='IN'&&etapaDoJogo==='SF'&&categoria===3){
                                                            console.log(550*4.2*quantidadeDeINgresso)
                                                            }else
                                                                if(tipoDeJogo==='IN'&&etapaDoJogo==='SF'&&categoria===4){
                                                                console.log(220*4.2*quantidadeDeINgresso)
                                                                }else
                                                                if(tipoDeJogo==='IN'&&etapaDoJogo==='SF'&&categoria===1){
                                                                    console.log(1.320*4.2*quantidadeDeINgresso)
                                                                    }else
                                                                        if(tipoDeJogo==='IN'&&etapaDoJogo==='DT'&&categoria===1){
                                                                        console.log(660*4.2*quantidadeDeINgresso)
                                                                        }else
                                                                        if(tipoDeJogo==='IN'&&etapaDoJogo==='DT'&&categoria===2){
                                                                            console.log(440*4.2*quantidadeDeINgresso)
                                                                            }else
                                                                                if(tipoDeJogo==='IN'&&etapaDoJogo==='DT'&&categoria===3){
                                                                                console.log(330*4.2*quantidadeDeINgresso)
                                                                                }else
                                                                                    if(tipoDeJogo==='IN'&&etapaDoJogo==='DT'&&categoria===4){
                                                                                    console.log(170*4.2*quantidadeDeINgresso)
                                                                                    } else
                                                                                        if(tipoDeJogo==='IN'&&etapaDoJogo==='FI'&&categoria===1){
                                                                                        console.log(1.980*4.2*quantidadeDeINgresso)
                                                                                        }else
                                                                                            if(tipoDeJogo==='IN'&&etapaDoJogo==='FI'&&categoria===2){
                                                                                                console.log(1.320*4.2*quantidadeDeINgresso)
                                                                                            }else
                                                                                                if(tipoDeJogo==='IN'&&etapaDoJogo==='FI'&&categoria===3){
                                                                                                console.log(880*4.2*quantidadeDeINgresso)
                                                                                                }else
                                                                                                    if(tipoDeJogo==='IN'&&etapaDoJogo==='FI'&&categoria===4){
                                                                                                    console.log(330*4.2*quantidadeDeINgresso)}
 }
 valorTotal(nomeDoJogador,tipoDeJogo,etapaDoJogo,categoria,quantidadeDeINgresso)
 
 console.log(`nome: ${nomeDoJogador},
 tipo de jogo:${tipoDeJogo},
 Etapa do jogo:${etapaDoJogo},
 categoria:${categoria},
 quantidade de ingressos:${quantidadeDeINgresso}`) */