const { Product } = require("../models");

// CRUD controls for Products

// get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: ["category"],
    });
    res.status(200).json({ products: products });
  } catch (error) {
    next(error);
  }
};

// get product by id
exports.getProductById = async (req, res, next) => {
  try {
    const uid = req.params.id;

    const product = await Product.findByPk(uid, {
      include: ["category"],
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ product: product });
  } catch (error) {
    next(error);
  }
};

// create new product
exports.createProduct = async (req, res, next) => {
  const { name, description, categoryId, price } = req.body;

  if (!name || !categoryId || !price) {
    return res.status(400).json({ message: "Missing required data" });
  }

  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const product = await Product.create(req.body);
    res.status(201).json({ product: product });
  } catch (error) {
    next(error);
  }
};

// update product
exports.updateProduct = async (req, res, next) => {
  const uid = req.params.id;
  const { name, description, categoryId, price } = req.body;

  if (!name && !categoryId && !price) {
    return res.status(400).json({ message: "Missing required data to update" });
  }

  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const product = await Product.findByPk(uid);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    await product.update({
      name: name || product.name,
      description: description || product.description,
      categoryId: categoryId || product.categoryId,
      price: price || product.price,
    });

    await product.save();
    res.status(200).json({ product: product });
  } catch (error) {
    next(error);
  }
};

// delete product
exports.deleteProduct = async (req, res, next) => {
  const uid = req.params.id;
  try {
    const product = await Product.findByPk(uid);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
