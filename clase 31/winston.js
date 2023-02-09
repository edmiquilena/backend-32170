import winston from "winston";
// * JSON
const loggerDB = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.File({
      filename: "winston_error.log",
      level: "error",
    }),
  ],
});

const loggerProd = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.File({
      filename: "winston_error.log",
      level: "error",
    }),
  ],
});

loggerDB.info("hola");
loggerDB.debug("hola");
loggerDB.warn("hola");
loggerDB.error("hola");
loggerDB.log("silly", "mensaje");
export default { loggerDB, loggerProd };
