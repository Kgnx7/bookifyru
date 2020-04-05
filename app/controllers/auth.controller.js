const db = require("../models");
const User = db.users;

exports.signup = async (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Неверные данные!",
    });
    return;
  }
  User.create({
    username: req.body.email,
    email: req.body.email,
    password: req.body.password,
  })
    .then(function (user) {
      res.json(user);
    })
    .catch((err) => {
      res.status(422).json(err);
    });
};

exports.login = (req, res) => {
  if (!req.user) {
    res.json(req.message);
  }
  req.login(req.user, (err) => {
    if (err) {
      return next(err);
    }
    const { id, email, username } = req.user.dataValues;
    res.json({ id, email, username });
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.end();
};
