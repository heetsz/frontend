const express  = require('express');
const router = express.Router();

const {getUsers, adduser, getUser} = require('../controllers/users');

router.get("/", getUsers)
router.post("/", adduser)
router.get("/:id", getUser)
module.exports = router;