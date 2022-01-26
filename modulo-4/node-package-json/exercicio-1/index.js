
// Para acessar os scripts usamod o process.argv, que e consiste em um array de strings cujo os dois primeiros argumentos são fixos;


const name= process.argv[2]

const age= Number(process.argv[3])

const futureAge= Number(process.argv[4])

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age+futureAge}`)