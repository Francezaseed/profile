const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/usersControllers')
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();

router.get("/user", userControllers.getUsers);
router.post("/user", jsonParser, userControllers.postUsers);
module.exports = router;