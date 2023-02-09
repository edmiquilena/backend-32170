import pino from "pino";

const logger = pino();
logger.level = "error";
logger.info("hola consola");
logger.error("hola consola");

// * archivo

const loggerFile = pino("logger_pino.log");
loggerFile.level = "debug";
loggerFile.info("hola mundo");
loggerFile.error("hola mundo!", "e", "e", { hola: "mundo" });
const prod = loggerFile.child({ env: "prod" });
prod.error("hola child!");
