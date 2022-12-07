import { Request, Response } from "express";
import { connection } from "../data/connection";



export async function deleteCharacter(req: Request, res: Response):Promise<void> {
   try {
    const { id } = req.params;
    
    await connection("character_")
    .delete()
    .where({id})

   /*  const index = characters.findIndex(
        character => character.id === Number(id)
    )
    
    if(index > -1) characters.splice(index, 1); */

    res.status(200).end()

   } catch (error) {
    res.status(500).end("Unexpected server error")
   }
}
