const express  = require('express');
const router = express.Router();

const {getCars, getCar, addCars, updateCars, deleteCars} = require('../controllers/cars');

router.get("/", getCars)
router.get("/:id", getCar)
router.post("/", addCars)
router.put("/:id", updateCars)
router.delete("/:id", deleteCars)

module.exports = router;