import app from "./app";
import { createCharacter } from "./endponits/createCharecters";
import { deleteCharacter } from "./endponits/deleteCharacter";
import getAllChacters from "./endponits/getAllCharacters"

app.get("/character", getAllChacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)