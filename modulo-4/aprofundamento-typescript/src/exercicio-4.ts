  //Exercicio 4
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b-Para transpilar um arquivo em js usa-se a função tsc;
// c- Para transpilar para uma pasta scr é diferença é na hora de por o caminho para transpilação que seria: "start": "tsc && node ./scr/index.js",
// d- criando arquivos .tsc separados para cada codigo