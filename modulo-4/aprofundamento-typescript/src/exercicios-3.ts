//Exercicio 3

type post={
    autor: string,
    texto: string|number
}

const posts: post=[
     {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ] 
  console.log(posts)
  

  function buscarPostsPorAutor(posts: any[], autorInformado: any) {
    return posts.filter(
      (post: { autor: any }) => {
        return post.autor === autorInformado
      }
    )
  }
  