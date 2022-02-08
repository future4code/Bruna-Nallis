import { Request, Response } from "express"
import connection from "./connection"
import app from "./app";

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)


	return result[0][0]  
}


app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error) {
      res.status(500).send("Unexpected error")
    }})

    const searchActor = async (name: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
      `)
      return result
    }


    const countActors = async (gender: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT COUNT * FROM Actor WHERE gender = "${gender}"
      `)
      const count = result[0][0].count
      return count
    }

    //Ex.2
    
    const createActor = async (
      id: string,
      name: string,
      salary: number,
      dateOfBirth: Date,
      gender: string
    ): Promise<void> => {
      await connection
        .insert({
          id: id,
          name: name,
          salary: salary,
          birth_date: dateOfBirth,
          gender: gender,
        })
        .into("Actor")
    }

    const updateActor = async (id: string, salary: number): Promise<any> => {
      await connection("Actor")
        .update({
          salary: salary,
        })
        .where("id", id)
    }

    const deleteActor = async (id: string): Promise<void> => {
      await connection("Actor")
        .delete()
        .where("id", id);
    }

    const avgSalary = async (gender: string): Promise<any> => {
      const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender })
    
      return result[0].average
    }

    //Ex. 3

    app.get("/actor/:id", async (req: Request, res: Response) => {
      try {
        const id = req.params.id
        const actor = await getActorById(id)
    
        res.status(200).send(actor)
      } catch (err) {
        res.status(400).send({
          message: err.message,
        })
      }
    })

    app.get("/actor", async (req: Request, res: Response) => {
      try {
        const count = await countActors(req.query.gender as string)
        res.status(200).send({
          quantity: count,
        })
      } catch (err) {
        res.status(400).send({
          message: err.message,
        })
      }
    })

    //Ex.4

    app.put("/actor", async (req: Request, res: Response) => {
      try {
        const money = await newSalary (req.body.id, req.body.salary)
        res.status(200).send({
          message: "Success",
        })
      } catch (err) {
        res.status(400).send({
          message: err.message,
        })
      }
    })

    app.delete("/actor/:id", async (req: Request, res: Response) => {
      try {
        await deleteActor(req.params.id)
      } catch (err) {
        res.status(400).send({
          message: err.message,
        })
      }
    })

function newSalary(id: any, salary: any) {
  throw new Error("Function not implemented.");
}
