import { Router } from "express";
const PokemonRouter = new Router();

import * as PokemonController from "../controllers/pokemon.controller.js";

PokemonRouter
  .get("/", PokemonController.getAllPokemon)
  .get("/:id", PokemonController.getPokemonById)
export default PokemonRouter;