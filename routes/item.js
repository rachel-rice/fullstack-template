const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

// Define your routes and use the controller functions
router.get('/', itemController.getItems);

router.post('/add', itemController.addItem);

router.put()

router.delete()

module.exports = router;