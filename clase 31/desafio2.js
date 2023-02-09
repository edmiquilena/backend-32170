import express from "express";
import Log4js from "log4js";
// * archivo .log, .txt
// * console
const app = express();
Log4js.configure({
  appenders: {
    loggerConsole: { type: "console" },
    loggerFile: { type: "file", filename: "logger.log" },
    loggerErrFile: { type: "file", filename: "errors.log" },
    loggerDebugFile: { type: "file", filename: "debug.log" },
    loggerErrors: {
      appender: "loggerErrFile",
      type: "logLevelFilter",
      level: "error",
    },
    loggerDebug: {
      appender: "loggerDebugFile",
      type: "logLevelFilter",
      level: "debug",
    },
  },
  categories: {
    default: {
      appenders: ["loggerConsole"],
      level: "trace",
    },
    prod: {
      appenders: ["loggerErrors", "loggerDebug"],
      level: "all",
    },
    db: {
      appenders: ["loggerConsole", "loggerFile"],
      level: "info",
    },
  },
});
const logger = Log4js.getLogger(
  process.env.NODE_ENV === "PROD" ? "prod" : undefined
);

const sum = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Valor no numerico ingresado!");
    return "valor no numerico";
  }

  const suma = Number(num1) + Number(num2);

  logger.info(suma);

  return suma;
};

app.get("/suma", (req, res) => {
  const { num1, num2 } = req.query;

  const result = sum(num1, num2);
  res.send({ result: result });
});

app.listen(8080, () => console.log("Escuchando!"));
