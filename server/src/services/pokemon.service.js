import { PokemonDAO as Pokemon } from "../daos/index.js";


export const getAllPokemon = async () => {

const data = await Pokemon.getAll();
return data;
}

export const getPokemonById = async (id) => {

    const data = await Pokemon.getById(id);
    return data;
    }
    