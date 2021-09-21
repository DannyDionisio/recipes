const mongoose = require("mongoose");
const logger = require("./src/utils/debug");

mongoose.connect(process.env.MONGODB_URL, {
  dbName: "recipes",
});

mongoose.connection.on("error", (error) => logger.db.mongo.error("%O", error.name));
mongoose.connection.on("connected", () => logger.db.mongo.debug("Connected"));
mongoose.connection.on("disconnected", () => logger.db.mongo.debug("Disconnected"));
