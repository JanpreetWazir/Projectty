const express = require('express');
const router = express.Router();
const { signin } = require('../Controller/userController');

// Define the route for user sign-in
router.post('/createform', signin);

module.exports = router;