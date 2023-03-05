/**
 * @openapi
 *  /pokemon/{id}:
 *      get:
 *          description: Obtiene la caja del usuario con sesion iniciada
 *
 *
 */

import { Router } from "express";
const PokemonRouter = new Router();

import * as PokemonController from "../controllers/pokemon.controller.js";

PokemonRouter.get("/", PokemonController.getAllPokemon)
  .get("/:id", PokemonController.getPokemonById)
  .post("/", PokemonController.postPokemon);
export default PokemonRouter;
