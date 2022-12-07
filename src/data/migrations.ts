import { connection } from "./connection"
import movies from "./movies.json"
import character from "./character.json"
import movie_character from "./movie_characters.json"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS movie (
         id INT PRIMARY KEY AUTO_INCREMENT,
         title VARCHAR(255) NOT NULL,
         year YEAR NOT NULL
        );

      CREATE TABLE IF NOT EXISTS character_(
         id INT PRIMARY KEY AUTO_INCREMENT,
         name VARCHAR(255) NOT NULL,
         gender ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL,
         description VARCHAR(255) NOT NULL DEFAULT 'No description provided'
         );

      CREATE TABLE IF NOT EXISTS movie_character(
            movie_id INT,
            character_id INT,
            FOREIGN KEY(movie_id) REFERENCES movie(id),
            FOREIGN KEY(character_id) REFERENCES character_(id)
         );   
      
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertMovie = () => connection("movie")
   .insert(movies)
   .then(() => { console.log("Filmes criados") })
   .catch(printError)

const insertCharacter = () => connection("character_")
  .insert(character)
  .then(() => { console.log("Characters criados") })
  .catch(printError)

const insertMovieCharacter = () => connection("movie_character")
 .insert(movie_character)
 .then(() => { console.log("Filmes e Characters vinculados criados") })
 .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertMovie)
   .then(insertCharacter)
   .then(insertMovieCharacter)
   .finally(closeConnection)