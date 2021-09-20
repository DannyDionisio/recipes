const _ = require("lodash");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const { format } = require("date-fns");
const logger = require("../../utils/debug");

const Recipe = require("../../models/Recipe");
const { handleError } = require("../../utils/database");
const { VALIDATION_ERRORS } = require("../../utils/errorCodes");

const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];

const storage = multer.diskStorage({
  destination: function pathToUpload(req, file, cb) {
    const year = format(new Date(), "Y");
    const month = format(new Date(), "MM");
    const day = format(new Date(), "dd");

    const dir = path.join("uploads", year, month, day);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: function updateRecipeImageName(req, file, cb) {
    const ext = path.extname(file.originalname);
    const fileName = file.originalname.replace(ext, "") + "-" + Date.now() + ext;

    cb(null, fileName);
  },
});

const upload = multer({
  storage,
  fileFilter: function shouldUploadImage(req, file, cb) {
    const isValid = allowedTypes.includes(file.mimetype);
    let err = null;

    if (!isValid) {
      err = new Error(`Only PNG and JPG are allowed.`);
      err.invalidFile = true;
    }

    cb(err, isValid);
  },
}).single("image");

module.exports = function login(req, res) {
  upload(req, res, (e) => {
    if (e) {
      if (e.invalidFile) {
        res.status(400).json({
          status: false,
          data: [
            {
              field: "image",
              error: VALIDATION_ERRORS.invalidFileType,
            },
          ],
        });
        return;
      }

      res.sendStatus(500);
      logger.server.error("Recipe image upload error", e);

      return;
    }

    const {
      title,
      categoryId,
      portions,
      isForBlendingMachine,
      ingredients,
      preparationSteps,
      timing,
      metadata = {},
    } = req.body;
    Recipe.create({
      title,
      image: req.file?.path,
      category: categoryId,
      isForBlendingMachine,
      portions,
      ingredients,
      preparationSteps,
      timing: {
        cooking: timing?.cooking,
        preparation: timing?.preparation,
      },
      metadata: {
        source: metadata.source,
        url: metadata.url,
        notes: metadata.notes,
      },
    })
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
  });
};
