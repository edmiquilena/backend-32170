import { BoxDAO as Box } from "../daos/index.js";

export const getAllBoxes = async () => {
  const data = await Box.getAll();
  return data;
};
export const createUserBox = async (userId) => {
  const data = await Box.create({ pokemon: [], uid: userId });

  return data;
};

export const getBoxByUserId = async (userId) => {
  const data = await Box.getByField("uid", userId);
  return data;
};
export const deleteBoxByUserId = async (userId) => {
  const box = await getBoxByUserId(userId);
  // box._id

  Box.deleteById(box._id);

  return box;
};

// ? req.body
export const addPokemonToBox = async (userId, pokemon) => {
  const box = await getBoxByUserId(userId);
  //  name: { type: String, required: true },
  // dex: String,
  // types: Array

  const { name, dex, types, _id } = pokemon;
  box.pokemon.push({ name, dex, types });
  await Box.updateById(box._id, box);

  return box;
};
