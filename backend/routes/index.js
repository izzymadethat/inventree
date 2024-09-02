const router = require("express").Router();
const categoryRoutes = require("./categories");
const inventoryRoutes = require("./inventory");
const productRoutes = require("./products");

router.use("/categories", categoryRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/products", productRoutes);

module.exports = router;
