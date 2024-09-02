const router = require("express").Router();
const controllers = require("../controllers/inventory");

// CRUD operations for Inventory

// get all items in inventory
router.get("/", controllers.getAllInventory);

// get item by id
router.get("/:id", controllers.getInventoryById);

// create new item in inventory
router.post("/", controllers.createInventory);

// update item in inventory
router.put("/:id", controllers.updateInventory);

// delete item from inventory
router.delete("/:id", controllers.deleteInventory);

module.exports = router;
