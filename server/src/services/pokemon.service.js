import { PokemonDAO as Pokemon } from "../daos/index.js";
import pokemonDto from "../dto/pokemon.dto.js";

export const getAllPokemon = async () => {
  const data = await Pokemon.getAll();
  return data;

  // * SKU, {rojo: 3, amarillo: 5, verde: 0}
};

export const getPokemonById = async (id) => {
  const data = await Pokemon.getById(id);
  return data;
};

export const createPokemon = async (data) => {
  const { name, dex, types } = data;
  const res = await Pokemon.save({ name, dex, types });
  return res;
};
