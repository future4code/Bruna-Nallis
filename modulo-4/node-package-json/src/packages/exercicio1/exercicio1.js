
// Para acessar os scripts usamod o process.argv, que e consiste em um array de strings cujo os dois primeiros argumentos são fixos;

const colors=require('colors')

const myName= process.argv[2]

const age= Number(process.argv[3])

const params= process.argv.length -2

if (params<2){
    return console.log (`Was expecting 2 parameters, got ${params}`.red)
}

console.log(`Olá, ${myName}! Você tem ${age} anos.` .purple)
console.log(`Olá, ${myName}! Você tem ${age} anos. Em sete anos você terá ${age+7}`.blue)

