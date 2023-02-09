import express from "express";
import compression from "compression";
const app = express();
const msg = "hola que tal".repeat(10);
// ? > peso | >= tiempo de respuesta | performance
app.get("/hola", (req, res) => {
  console.log("metodo GET en /hola ha sido llamado!");
  res.send(msg);
});
// ! < peso | < tiempo de respuesta | < performance
app.get("/holazip", compression(), (req, res) => {
  res.send(msg);
});
app.listen(8080, () => console.log("Escuchando!"));
