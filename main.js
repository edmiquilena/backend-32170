import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hola mundo desde railway!");
});

app.get("/saludo", (req, res) => {
  const { nombre } = req.query;

  res.send(`Hola ${nombre}!`);
});
// * => process.env.PORT
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
