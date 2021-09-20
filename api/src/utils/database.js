const _ = require("lodash");
const logger = require("./debug");
const { DB_CODE_ERRORS, VALIDATION_ERRORS } = require("./errorCodes");

module.exports.handleError = (err) => {
  const isMongoErr = err.name === "MongoError";
  const isValidationError = err.name === "ValidationError";

  if (isMongoErr) {
    const code = err.code;
    const error = DB_CODE_ERRORS[code];
    const fields = Object.keys(err.keyPattern).reduce((acc, key) => {
      if (err.keyPattern[key] === 1) acc.push(key);
      return acc;
    }, []);

    if (error && fields.length > 0) {
      return {
        error,
        fields,
      };
    }

    logger.db.mongo.error("MONGODB", err);
    return null;
  }

  if (isValidationError) {
    const errors = Object.values(err.errors);

    const data = errors.reduce((acc, err) => {
      let error = VALIDATION_ERRORS[err.kind];

      if (err.kind === "user defined") {
        error = err.properties.message;
      }

      acc.push({
        field: err.path,
        error,
      });
      return acc;
    }, []);

    logger.db.mongo.debug("VALIDATION", err);
    return data;
  }

  logger.db.mongo.error("INTERNAL", err);
  return null;
};
