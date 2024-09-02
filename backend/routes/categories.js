const router = require("express").Router();
const controllers = require("../controllers/categories");

// CRUD operations for Categories

// get all categories
router.get("/", controllers.getAllCategories);

// get category by id
router.get("/:id", controllers.getCategoryById);

// create new category
router.post("/", controllers.createCategory);

// update category
router.put("/:id", controllers.updateCategory);

// delete category
router.delete("/:id", controllers.deleteCategory);

module.exports = router;
