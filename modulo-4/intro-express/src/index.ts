import express from 'express'
import cors from 'cors'

const test= express ()

test.use(cors())
test.use(express.json())

test.listen(3000, ()=> console.log('Servidor disponível na porta 3000'))

test.get('/', (req,res)=> {
  res.send('Hello from Express')
})

//Ex. 2 
type User = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
}

//eX.3
const users: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
]

// Ex.4

test.get("/users", (req, res) => {
  res.send(users)
})

//Ex.5

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

//Ex.6

const posts: Post[] = [
  {
    userId: 1,
    id: 11,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 2,
    id: 22,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 3,
    id: 33,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
]

// Ex.7
test.get("/posts", (req, res) => {
  res.send(posts)
})

// Ex.8
test.get("/users/:id/posts", (req, res) => {
  const userId = Number(req.params.id)

  const result = posts.filter(post => {
    if (post.userId === userId) {
      return true
    } else {
      return false
    }
  })

  res.send(result)
})