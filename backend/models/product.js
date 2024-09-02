const { Sequelize } = require("sequelize");
const db = require("../utils/database");

const Product = db.define("Product", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
  },
  categoryId: Sequelize.INTEGER,
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;
