//Interpretação de codigo

//Exercicio1
// console.log(filme.elenco[0])="Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1])= "Matheus Nachtergaele",
// "Selton Mello", "Denise Fraga", 
// console.log(filme.transmissoesHoje[2])= canal: "Globo", horario: "14h"}

//Exercicio 2
// a) console.log(cachorro)=nome: "Juca", idade: 3, raca: "SRD"
// console.log(gato)= nome: "Juba", idade: 3, raca: "SRD"
// console.log(tartaruga)= nome: "Jubo", idade: 3, raca: "SRD"

// b)Os tres pontos servem para substituir informação ao objeto.

//Exercicio 3.
// a) console.log(minhaFuncao(pessoa, "backender"))=false
//    console.log(minhaFuncao(pessoa, "altura"))=undefined
//b) O valor false foi resultado do valor:  backender: false;Já altura não é um 
//parametro da função por isso deu undefined.

//Escrita de codigo

//  const pessoa= {

//      nome: 'Karol',
//      apelido:['Ka', 'Karolzinha', 'Kaka' ]}
    
//      const novoApelido= {...pessoa, apelido:['Kar','rol','kazinha']}

 // console.log (`Ola, meu nome é ${pessoa.nome},mas pode me chamar de ${pessoa.apelido[0]},
 // ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)

//console.log(`Ola, meu nome é ${pessoa.nome},mas pode me chamar de ${novoApelido.apelido[0]},
//${novoApelido.apelido[1]} ou ${novoApelido.apelido[2]}`)

//Exercicio2

// const pessoaUm= {
//     nome: 'Julia',
//     idade: 27,
//     profissão: 'estudante'
// }
// const pessoaDois={
//     nome: 'Leticia',
//     idade: 21,
//     profissão: 'cantora'
// }

// function frase(){
//     return [pessoaUm.nome, pessoaUm.nome.length, pessoaUm.idade, 
//         pessoaUm.profissão, pessoaUm.profissão.length]
// }

// console.log(frase(pessoaUm))

// function frase(){
//     return [pessoaDois.nome, pessoaDois.nome.length, pessoaDois.idade, 
//         pessoaDois.profissão, pessoaDois.profissão.length]
// }

// console.log(frase(pessoaDois))

//Exercicio3
// var carrinho=[]

// const frutaUm={
//     nome:'abacaxi',
//     disponibilodade:true
// }
// const frutaDois={
//     nome:'bana',
//     disponibilodade:true
// }
// const frutaTres={
//     nome:'chia',
//     disponibilodade:true
// }

// function compras(fruta){
// carrinho.push(fruta)    
 
// }
// compras(frutaUm)
// compras(frutaDois)
// compras(frutaTres)

// console.log(carrinho)

//Desafio
//1

// dadosUsuario={

//     nome: prompt('qual seu nome?'),
//     idade: prompt('qual sua idade?'),
//     profissão: prompt('qual sua profissão?') 
    
// }
// console.log(dadosUsuario)

// filme1={
//     nome: 'As branquelas',
//     anoDeLancamento: 2004
// }

// filme2={
//     nome: 'Um olhar do paraiso',
//     anoDeLancamento: 2009
// }

// function lancamento(){
//  return `O filme ${filme1} foi lamçado antes do${filme2}? `   
// }
// lancamento(filme1)
// lancamento(filme2)