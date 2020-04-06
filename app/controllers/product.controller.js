const db = require("../models"),
  Sequelize = require("sequelize"),
  Product = db.products,
  Op = Sequelize.Op;

exports.findOne = (req, res) => {
  const query = req.query;

  if (query && !query.hasOwnProperty("title")) {
    res.status(404).json({ message: "Ничего не найдено" });
    return;
  }

  Product.findOne({
    where: {
      title: query.title,
    },
    // where: {
    //   title: {
    //     [Op.iLike]: `%${query.title}%`,
    //   },
    // },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Не удалось найти",
      });
    });
};

exports.findAll = (req, res) => {
  const query = req.query;

  if (query && !query.hasOwnProperty("search")) {
    res.status(404).json({ message: "Ничего не найдено" });
    return;
  }

  Product.findOne({
    where: {
      title: {
        [Op.iLike]: `%${query.search}%`,
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Не удалось найти",
      });
    });
};

exports.create = (req, res) => {
  if (!Array.isArray(req.body)) {
    res.json({ message: "Некорректный формат" });
    return;
  }

  Product.bulkCreate(req.body).then(() => {
    res.json({ message: "Все ок 👌" });
  });
};
