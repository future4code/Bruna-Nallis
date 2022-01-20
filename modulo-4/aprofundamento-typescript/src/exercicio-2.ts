//Exercicio-2

 
function obterEstatisticas (numeros: any[]) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num //soma:number, num:any
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1], //type:any
        menor: numerosOrdenados[0], //type:any
        media: soma / numeros.length //type:number pois retorna o resultado de uma equação
    }

    return estatisticas
    
} 