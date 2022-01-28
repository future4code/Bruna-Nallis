//Ex.1

type aniversario= {
    nome: string,
    dia:string,
    mes: string,
    ano:string
}

function userBday ( parametro:aniversario){
  
    //console.log('Olá, meu nome é '+ parametro.nome +' nasci no dia '+  parametro.dia+ ' do mês de ' + parametro.mes + ' do ano de ' + parametro.ano )
}

userBday ({nome:'Bruna', dia:'7', mes:'Outubro',ano:'1994'}) 

//Ex.2

const funcao = (variavel: any): void => {
    // console.log("minha variavel é:", typeof variavel);
  };
  funcao(11);

  //Ex.3
  enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
  }
  
  type filme = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    pontuacao?: number;
  };
  
  const pipoca = (
    nome: string,
    ano: number,
    genero: GENERO,
    nota?: number
  ): filme => {
    if (nota) {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: nota
      };
    } else {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero
      };
    }
  };
  //console.log( pipoca("De repente 30", 2004, GENERO.COMEDIA, 9.5));

  //Ex 4
  
enum NICHO {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type colaboradores = {
    nome: string,
    salário: number,
    setor: NICHO,
    presencial: boolean
  }

  const listaColab: colaboradores[]= [
{ nome: "Marcos", salário: 2500, setor: NICHO.MARKETING, presencial: true },
{ nome: "Maria" ,salário: 1500, setor: NICHO.VENDAS, presencial: false},
{ nome: "Salete" ,salário: 2200, setor: NICHO.FINANCEIRO, presencial: true},
{ nome: "João" ,salário: 2800, setor: NICHO.MARKETING, presencial: false},
{ nome: "Josué" ,salário: 5500, setor: NICHO.FINANCEIRO, presencial: true},
{ nome: "Natalia" ,salário: 4700, setor: NICHO.VENDAS, presencial: true},
{ nome: "Paola" ,salário: 3500, setor: NICHO.MARKETING, presencial: true }]

//const employ = (lista: colaboradores[]): colaboradores[] => {const filtro: colaboradores[] = lista.filter((colaborador) => {
    //return colaborador.setor === NICHO.MARKETING && colaborador.presencial;
//})
//return filtro};

//Ex. 5

enum SITE {
    ADMIN = "admin",
    USER = "user"
  }
  
  type user = {
    name: string,
    email: string,
    role: SITE
  }
  
  const usersList: user[] = [
    { name: "Rogério", email: "roger@email.com", role: SITE.USER },
    { name: "Ademir", email: "ademir@email.com", role: SITE.ADMIN },
    { name: "Aline", email: "aline@email.com", role: SITE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: SITE.USER },
    { name: "Adilson", email: "adilson@email.com", role: SITE.USER },
    { name: "Carina", email: "carina@email.com", role: SITE.ADMIN }
  ]
  
  const access = (list: user[]): string[] => {
    const emailsList: string[] = list
      .filter((user) => user.role === SITE.ADMIN)
      .map((user) => user.email)
    return emailsList
  }
  // console.log(access(usersList));

//Ex.6

type conta = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
  }
  
  const listaDeClientes: conta[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
  ]
  
  const bank = (lista: conta[]): conta[] => {
    lista.forEach((cliente) => {
      const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0)
      cliente.saldoTotal -= totalDebitos
      cliente.debitos = []
    })
    const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0)
    return contasNegativas
  };
  // console.log( bank (listaDeClientes))
  
//Ex7
const valor = (preco: number): string => {
    const valorAjustado: string = preco.toFixed(2).replace(".", ",")
    return "R$ " + valorAjustado
  }
  
  type produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
  }
  
  const disponivel: produto[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
  ]
  
  const compras = (lista: produto[]): produto[] => {
    lista.forEach(
      (item) => (item.valorUnitario = valor (item.valorUnitario as number))
    )
  
    const listaOrdernada: produto[] = lista.sort(
      (a, b) => a.quantidade - b.quantidade
    )
  
    return listaOrdernada;
  }
  // console.log(compras(disponivel));
  
  // Ex.8
  
  
  
  // ex.9 ---------------------------------------------------------
  const anagrama = (palavra: string): number => {
    const quantidadeLetras = palavra.length;
  
    if (quantidadeLetras === 0) {
      return 1;
    }
  
    let resultado = 1;
  
    for (let i = quantidadeLetras; i > 0; i--) {
      resultado *= i;
    }
  
    return resultado;
  };
  // console.log( anagrama("sushi"))