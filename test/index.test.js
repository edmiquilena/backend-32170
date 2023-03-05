import request from "supertest";
import app from "../server/src/app.js";
import { expect } from "chai";
describe("test pokemon endpoint", () => {
  let App = request(app);

  it("should list all pokemon", async () => {
    //
    const req = await App.get("/api/pokemon");
    //
    req.expect(404).end((err, res) => {
      if (err) throw err;
    });
  });
  it("should create a new pokemon", async () => {
    const req = await App.post("api/pokemon").send({
      name: "Celebi",
      types: ["Grass"],
      dex: "300",
    });

    expect(req.body).to.include.keys("name", "types", "dex", "_id");
  });
});
