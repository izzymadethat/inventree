const Product = require("./product");
const Category = require("./category");
const Inventory = require("./inventory");

// Associations
Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

Product.hasOne(Inventory, { foreignKey: "productId" });
Inventory.belongsTo(Product, { foreignKey: "productId" });

// converts models to package folder
module.exports = { Product, Category, Inventory };
