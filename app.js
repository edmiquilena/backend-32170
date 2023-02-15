import express from "express";
import { cpus } from "os";
export default function () {
  // * => nucleos
  const numCPUs = cpus().length;
  const app = express();
  // * MVC
  app.get("/info", (req, res) => {
    res.send({ cpu: numCPUs, pid: process.pid });
  });
  return app;
}
