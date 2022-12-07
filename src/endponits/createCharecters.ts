import { Request, Response } from "express";
import { connection } from "../data/connection";



export async function createCharacter(req: Request, res: Response):Promise<void>{
    const {name, gender, description} = req.body;
    
    try {
        await connection("character_")
    .insert({name,gender,description})
    
    /* characters.push({
        id:Date.now(),
        name,
        gender,
        description
    }); */

    res.status(201).end()
    } catch (error) {
        res.status(500).end("Unexpected server error")
    }
}
