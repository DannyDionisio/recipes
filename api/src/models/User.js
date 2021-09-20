const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      validate: [emailRegex, "Email is not valid"],
      set: (v) => v?.toLowerCase(),
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      set: (value) => (value ? bcrypt.hashSync(value, saltRounds) : undefined),
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

userSchema.set("toObject", conversionOptions);
userSchema.set("toJSON", conversionOptions);

userSchema.methods.passwordMatch = function userPasswordMatch(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
