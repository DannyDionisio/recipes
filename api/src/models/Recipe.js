const mongoose = require("mongoose");
const { VALIDATION_ERRORS } = require("../utils/errorCodes");
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const recipeScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      ref: "RecipeCategory",
      type: mongoose.Schema.Types.ObjectId,
    },
    portions: Number,
    isForBlendingMachine: {
      type: Boolean,
      default: false,
    },
    image: String,
    ingredients: {
      type: [
        {
          name: String,
          amount: Number,
          unit: String,
        },
      ],
      default: [],
    },
    preparationSteps: {
      type: [
        {
          step: Number,
          text: String,
        },
      ],
      default: [],
    },
    timing: {
      cooking: Number,
      preparation: Number,
    },
    metadata: {
      source: String,
      url: {
        type: String,
        validate: [urlRegex, VALIDATION_ERRORS.invalidUrl],
        set: (v) => v?.toLowerCase(),
      },
      notes: String,
    },
  },
  {
    versionKey: false,
    skipVersioning: true,
    timestamps: true,
  }
);

const conversionOptions = {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
};

recipeScheme.set("toObject", conversionOptions);
recipeScheme.set("toJSON", conversionOptions);

recipeScheme.methods.passwordMatch = function userPasswordMatch(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Recipe", recipeScheme);
