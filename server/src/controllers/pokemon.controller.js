import pokemonDto from "../dto/pokemon.dto.js"
import  * as PokemonService from "../services/pokemon.service.js"
export const getAllPokemon = async (req, res) => {
const data = await PokemonService.getAllPokemon()
res.send(data.map(pkmn => pokemonDto(pkmn)))

}

export const getPokemonById = async (req, res) => {
const {id} = req.params;
    const data = await PokemonService.getPokemonById(id)
    res.send(data)
    
    
}
