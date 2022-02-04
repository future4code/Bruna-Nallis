import { Response, Request } from "express";
import app from "./app";
import connection from "./connection";

app.post("/user", async (req:Request, res:Response): Promise<void> =>{

try{
    await connection.raw (`
    INSERT INTO ToDoListUser (id, name, nickname, email )
    VALUES(     

        ${Date.now().toString()},
        
        "${req.body.name}",

        "${req.body.nickname}",

        "${req.body.email}")`)
        res.status(200).send('User create with success!')
} catch (err:any){
    console.log(err.message)
    res.status(500).send('An unexpected error occurred')
}
});

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const user = await connection("ToDoListUser")
      .select("id", "nickname")
      .where({id:id});
      res.status(200).send(user)
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });