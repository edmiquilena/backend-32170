import Log4js from "log4js";
// * LINEA

// * archivo .log, .txt
// * console
Log4js.configure({
  appenders: {
    loggerConsole: { type: "console" },
    loggerFile: { type: "file", filename: "logger.log" },
  },
  categories: {
    default: {
      appenders: ["loggerConsole"],
      level: "trace",
    },
    prod: {
      appenders: ["loggerFile"],
      level: "warn",
    },
    db: {
      appenders: ["loggerConsole", "loggerFile"],
      level: "info",
    },
  },
});

const logger = Log4js.getLogger();
logger.trace("hola");
logger.warn("hola");
logger.error("hola");

export const prod = Log4js.getLogger("prod");
prod.trace("prod hola");
prod.warn("prod hola");
prod.error("prod hola");
