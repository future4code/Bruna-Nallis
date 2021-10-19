/*Interpretação de codigo

1-O codigo está passando numeros menores que 5, para cada numero menor que 5 ele acrescenta +1 numero.
o resuldado impresso será 1,2,3,4,5.

2- serão impressos no console os numero: 21, 23, 25, 27, 30. 
Para acessar todos os elementos da lista é necessário.*/

function exercicio1() {
    const qntBixinhos = prompt("Quantos bixinhos você tem?");
    const nomeBixinhos = [];
  
    if (qntBixinhos == 0) {
      console.log("Que pena! Você pode adotar um pet!");
    } else if (qntBixinhos > 0) {
      for (let i = 0; i < qntBixinhos; i++) {
        const nome = prompt("Digite o nome do bixinho");
        nomeBixinhos.push(nome);
      }
      console.log("Nome dos bixinhos: ", nomeBixinhos);
    }
  }
  
  //exercicio1();
  
  function exercicio2() {
    const originalArray = [-11900, 102, 641828, 13, 1, 982, 161];
  
    for (let i = 0; i < originalArray.length; i++) {
      console.log(originalArray[i]);
    }
  
    for (let i = 0; i < originalArray.length; i++) {
      console.log(originalArray[i] / 10);
    }
  
    const paresArray = [];
  
    for (let i = 0; i < originalArray.length; i++) {
      if (originalArray[i] % 2 === 0) {
        paresArray.push(originalArray[i]);
      }
    }
    console.log("Somente os pares", paresArray);
  
    const fraseArray = [
      "o",
      "rato",
      "roeu",
      "a",
      "roupa",
      "do",
      "rei",
      "de",
      "roma",
    ];
    for (let i = 0; i < fraseArray.length; i++) {
      console.log("O elemento do índice " + i + " é " + fraseArray[i]);
    }
  
    let maior = originalArray[0];
    let menor = originalArray[0];
    for (let i = 1; i < originalArray.length; i++) {
      if (originalArray[i] > maior) {
        maior = originalArray[i];
      }
  
      if (originalArray[i] < menor) {
        menor = originalArray[i];
      }
    }
    console.log("O maior é", maior, "e o menor número é", menor);
  }
  
  //exercicio2();
  
  function desafio1() {
    const numeroEscolhido = prompt("Escolha um numero");
    let numeroTentativas = 0;
    let numeroChutado = 0;
  
    console.log("Vamos jogar!");
  
    do {
      numeroChutado = prompt("Chute um número");
      console.log("O número chutado foi", numeroChutado);
      numeroTentativas++;
  
      if (numeroEscolhido > numeroChutado) {
        console.log("Errou. O número escolhido é maior");
      } else if (numeroEscolhido < numeroChutado) {
        console.log("Errou. O número escolhido é menor");
      }
    } while (numeroEscolhido !== numeroChutado);
  
    console.log("Acertou!");
    console.log("O número de tentativas foi", numeroTentativas);
  }
  //desafio1();
  
  function desafio2() {
    const numeroEscolhido = Math.round(Math.random() * 100);
    let numeroTentativas = 0;
    let numeroChutado = 0;
  
    console.log("Vamos jogar!");
  
    do {
      numeroChutado = Number(prompt("Chute um número"));
      console.log("O número chutado foi", numeroChutado);
      numeroTentativas++;
  
      if (numeroEscolhido > numeroChutado) {
        console.log("Errou. O número escolhido é maior");
      } else if (numeroEscolhido < numeroChutado) {
        console.log("Errou. O número escolhido é menor");
      }
    } while (numeroEscolhido !== numeroChutado);
  
    console.log("Acertou!");
    console.log("O número de tentativas foi", numeroTentativas);
  }
  
  desafio2();