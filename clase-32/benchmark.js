import autocannon from "autocannon";
import { PassThrough } from "stream";

function run(url) {
  const buf = [];

  const outputStream = new PassThrough();

  const cannon = autocannon({
    url,
    connections: 100,
    duration: 10,
  });

  autocannon.track(cannon, { outputStream });

  outputStream.on("data", (data) => buf.push(data));

  cannon.on("done", () => {
    process.stdout.write(Buffer.concat(buf));
  });
}

run("http://localhost:8080/?max=1000000");
