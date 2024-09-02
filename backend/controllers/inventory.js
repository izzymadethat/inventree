const { Inventory, Product } = require("../models");

// CRUD controls for Inventory

// get all items in inventory
exports.getAllInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.findAll({
      include: ["product"],
    });
    res.status(200).json({ inventory: inventory });
  } catch (error) {
    next(error);
  }
};

// get item by id
exports.getInventoryById = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const inventory = await Inventory.findByPk(uid, {
      include: ["product"],
    });
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.status(200).json({ inventory: inventory });
  } catch (error) {
    next(error);
  }
};

// create new item in inventory
exports.createInventory = async (req, res, next) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity) {
    return res.status(400).json({ message: "Missing required data" });
  }

  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const inventory = await Inventory.create(req.body);
    res.status(201).json({ inventory: inventory });
  } catch (error) {
    next(error);
  }
};
