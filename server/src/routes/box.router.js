import { Router } from "express";
import * as BoxController from '../controllers/box.controller.js'
const BoxRouter = new Router();


BoxRouter
.get('/', BoxController.getByLoggedUser)
.post('/', BoxController.createUserBox)
.delete('/', BoxController.deleteUserBox)
.put('/:type', BoxController.addPokemonToBox)
export default BoxRouter;