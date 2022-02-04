
const colors = require('colors')

const matemagica = process.argv[2]
const a = Number(process.argv[2])
const b = Number(process.argv[3])

let result = "Resultado: "

switch (matemagica) {
    case 'some':
        result += a + b
        break;
    case 'mult':
        result += a * b
        break;
    case 'sub':
        result += a - b
        break
    default:
        result += "invalid operation"
}

console.log(result.yellow)