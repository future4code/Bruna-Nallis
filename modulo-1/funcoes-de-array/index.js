/*Interpretação de codigo:
1- nome: "Amanda Rangel", apelido: "Mandi",
  nome: "Laís Petra", apelido: "Laura",
   nome: "Letícia Chijo", apelido: "Chijo". 

2- nome: "Amanda Rangel",
   nome: "Laís Petra",
   nome: "Letícia Chijo".
   
3- nome: "Amanda Rangel", apelido: "Mandi",
  nome: "Laís Petra", apelido: "Laura"*/

//Escrita de codigo

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


/*const exercicio1=(pets)=>{
     return pets.nome
 }
    const nomeDosPets= pets.map(exercicio1)
    console.log('nome:',nomeDosPets)*/

/*const exercicio1B=(pets)=>{
    return pets.raca==='Salsicha'
}

const racaSalcicha=pets.filter(exercicio1B)
    console.log(racaSalcicha)*/

      

    /* const exercicio1C=(pet)=>{
    if(pet.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`)
    }
}

const promocao=pets.filter(exercicio1C) 
console.log(promocao)  */

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 /* const exercicio2=(produtos)=>{
     return produtos.nome

 }
 const nomeProdutos=produtos.map(exercicio2)
 console.log(nomeProdutos) */

 const exercicio2B=[]
 
 produtos.map(produto=> exercicio2B.push({
     nome: produto.nome,
     preco: produto.preco-(5/100)
 }))

//console.log(exercicio2B)

const exercicio2C=(produtos)=>{
    return produtos.categoria==='Bebidas'
}

const produtoBebidas=produtos.filter(exercicio2C)
//console.log(produtoBebidas)

const exercicio2D=(produto)=>{
    if ((produto.nome).includes("Ypê")){
        return true
    } else{
        return false
    }
}
const produtoYpe=produtos.filter(exercicio2D)
//console.log(produtoYpe)

const exercicio2E=[]
 
 produtos.map(produto=> exercicio2E.push({
     nome:produto.nome,
     preco:produto.preco
 }))

 const frase=(exercicio2E)=>{
    if(produto.nome && produto.preco){
        console.log(`Compre ${produto.nome} por ${produto.preco}`)
    }
}

const declaraFrase=exercicio2E.filter(frase) 
console.log(declaraFrase)  