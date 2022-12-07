import { movie, character, GENDER } from "../types";


export const movies: movie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
    }

];

export const characters: character[]=[
    {
        id: 1,
        name: "Storm",
        gender: GENDER.FEMALE,
    },
    {
        id: 2,
        name: "Deadpool",
        gender: GENDER.MALE,
        description: "Sexo motherf***"
    },
    {
        id: 3,
        name: "Colossus",
        gender: GENDER.MALE,
    }
]