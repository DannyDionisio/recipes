const express = require("express");
const cors = require("cors");
const logger = require("./src/utils/debug");
const authModule = require("./src/modules/auth/routes");
const recipeModule = require("./src/modules/recipe/routes");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authModule);
app.use("/recipe", recipeModule);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.server.info(`Server running on http://localhost:${port}`);
});
