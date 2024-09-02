const Product = require("./product");
const Category = require("./category");
const Inventory = require("./inventory");

// Associations
Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

Product.hasOne(Inventory, { foreignKey: "productId", as: "inventory" });
Inventory.belongsTo(Product, { foreignKey: "productId", as: "product" });

// converts models to package folder
module.exports = { Product, Category, Inventory };
