const _ = require("lodash");
const User = require("../../models/User");
const { handleError } = require("../../utils/database");

module.exports = async function signup(req, res) {
  const { name, email, password } = req.body;

  const user = new User({
    email,
    password,
    name,
  });

  user
    .save()
    .then((userDoc) => {
      res.status(201).json({
        status: true,
        data: {
          id: userDoc.get("_id"),
          name: userDoc.get("name"),
          email: userDoc.get("email"),
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
