const { Category } = require("../models");

// CRUD controls for Categories

// get all categories
exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ categories: categories });
  } catch (error) {
    next(error);
  }
};

// get category by id
exports.getCategoryById = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const category = await Category.findByPk(uid);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ category: category });
  } catch (error) {
    next(error);
  }
};

// create new category
exports.createCategory = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Missing required data" });
  }
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ category: category });
  } catch (error) {
    next(error);
  }
};

// update category
exports.updateCategory = async (req, res, next) => {
  const uid = req.params.id;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Missing required data to update" });
  }
  try {
    const category = await Category.findByPk(uid);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    }
    await category.update({ name: name || category.name });
    await category.save();
    res.status(200).json({ category: category });
  } catch (error) {
    next(error);
  }
};

// delete category
exports.deleteCategory = async (req, res, next) => {
  const uid = req.params.id;
  try {
    const category = await Category.findByPk(uid);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    }
    await category.destroy();
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    next(error);
  }
};
