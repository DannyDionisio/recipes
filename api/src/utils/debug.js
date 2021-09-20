const debug = require("debug");

const dbLogger = debug("database");
const mongoLogger = dbLogger.extend("mongo");

const serverLogger = debug("server");

const logger = {
  db: {
    mongo: {
      error: mongoLogger.extend("error"),
      info: mongoLogger.extend("info"),
      debug: mongoLogger.extend("debug"),
    },
  },
  server: {
    error: serverLogger.extend("error"),
    info: serverLogger.extend("info"),
    debug: serverLogger.extend("debug"),
  },
};

module.exports = logger;
