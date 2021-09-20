const mongoose = require("mongoose");

const recipeCategory = new mongoose.Schema(
  {
    title: String,
  },
  {
    versionKey: false,
    skipVersioning: true,
  }
);

module.exports = mongoose.model("RecipeCategory", recipeCategory);
