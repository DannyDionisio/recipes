const _ = require("lodash");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { handleError } = require("../../utils/database");

module.exports = function login(req, res) {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user?.passwordMatch(password)) {
        return res.sendStatus(403);
      }

      const token = jwt.sign(
        {
          name: user.get("name"),
          email: user.get("email"),
        },
        process.env.AUTH_SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        status: true,
        data: {
          token,
        },
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
