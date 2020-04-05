const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "products",
    }
  );

  return Product;
};
