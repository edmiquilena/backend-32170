import MongoDbContainer from "../../containers/mongo.container.js";

class BoxDaoMongoDb extends MongoDbContainer {
  constructor() {
    super("box", {
      pokemon: { type: [], required: true },
      uid: { type: String },
      status: { type: String },
    });
  }

  async create(box = {  pokemon: [] }) {
    return super.save(box);
  }
}

export default BoxDaoMongoDb;
