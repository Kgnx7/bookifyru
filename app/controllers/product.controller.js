const db = require("../models");
const Product = db.products;

exports.findOne = (req, res) => {
  const query = req.query;

  if (query && !query.hasOwnProperty('title')) {
    res.status(404).json({message: 'Ничего не найдено'});
    return;
  }

  Product.findOne({
    where: { title: query.title },
    attributes: ["id", "username", "email"],
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
    res.json({message: 'Некорректный формат'})
    return;
  }

  Product.bulkCreate(req.body).then(() => {
    res.json({message: 'Все ок 👌'});
  });
};
