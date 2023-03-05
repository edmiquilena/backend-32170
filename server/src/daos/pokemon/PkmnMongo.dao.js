import MongoDbContainer from "../../containers/mongo.container.js";
import pokemonDto from "../../dto/pokemon.dto.js";

class PokemonDaoMongoDb extends MongoDbContainer {
  constructor() {
    super("pokemon", {
      name: { type: String, required: true },
     dex: String,
     types: Array
    });
  }
}

export default PokemonDaoMongoDb;
