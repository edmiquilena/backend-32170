import parseArgs from "minimist";
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    p: "port",
    m: "mode",
  },
  default: {
    port: 8080,
    mode: "FORK",
  },
});
export default argv;
