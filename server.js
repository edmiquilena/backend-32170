import cluster from "cluster";
import { cpus } from "os";
import serverApp from "./app.js";
import argv from "./config.js";
console.log(argv);
// * => nucleos
const numCPUs = cpus().length;
if (argv.mode == "CLUSTER" && cluster.isPrimary) {
  // * primary
  console.log(`PID Primario ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) cluster.fork();

  cluster.on("exit", (woker) => {
    console.log(`Worker ${woker.process.pid} died`);
    cluster.fork();
    // * => sm, m, l, xl
  });
} else {
  console.log(
    argv.mode == "CLUSTER"
      ? `PID Worker ${process.pid}`
      : `PID Primario ${process.pid}`
  );
  // * worker => inicializacion server
  const app = serverApp();
  app.listen(argv.port, () => console.log("conectados!"));
}
