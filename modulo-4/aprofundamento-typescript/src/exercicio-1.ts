//Exercicio 1 A

import { NumericLiteral } from "typescript"

//const minhaString: string = 2

//console.log(minhaString)

//Ao tentar rodar aparece o erro:  Type 'number' is not assignable to type 'string'.


//B

let numAndString: number|string

numAndString = '12345'

console.log(numAndString)

//C-D 

 enum Favoritcolor{ Red='red',
 Pink='pink',
 Orange= 'orange',
 Yellow= 'yellow',
 Blue= 'blue',
 Violet= 'violet',
 Purple= 'purple'}

 type Person={
    name:string,
    age: number,
    color: Favoritcolor
}

const user1: Person ={
name: 'Bruna',
age: 27,
color: Favoritcolor.Pink
}

const user2: Person ={
    name: 'Elo',
    age: 1,
    color: Favoritcolor.Violet
    }

const user3: Person ={
        name: 'kaka',
        age: 30,
        color: Favoritcolor.Orange
        }

console.log(user1,user2,user3) 
