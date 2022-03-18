const _ = require("lodash");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const { format } = require("date-fns");
const logger = require("../../utils/debug");

const Recipe = require("../../models/Recipe");
const { handleError } = require("../../utils/database");
const { VALIDATION_ERRORS } = require("../../utils/errorCodes");

module.exports = function findRecipes(req, res) {
  Recipe.find({})
    .then((recipeDoc) => {
      res.status(200).json({
        status: true,
        data: recipeDoc,
      });
    })
    .catch((e) => {
      const errObject = handleError(e);

      if (errObject) {
        res.status(400).json({
          status: false,
          data: errObject,
        });
      } else {
        res.sendStatus(500);
      }
    });
};
