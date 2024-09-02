const router = require("express").Router();
const controllers = require("../controllers/products");

// CRUD operations for Products

// get all products
router.get("/", controllers.getAllProducts);

// get product by id
router.get("/:id", controllers.getProductById);

// create new product
router.post("/", controllers.createProduct);

// update product
router.put("/:id", controllers.updateProduct);

// delete product
router.delete("/:id", controllers.deleteProduct);

module.exports = router;
