// importing the express library
const express = require('express');

// express router
const router = express.Router();

// import the controller
const ctrl = require('../controllers');

// this is telling it what controller is taking care of it
// this is displaying all shirts for the client
router.get('/', ctrl.shirt.allShirts);

// exporting router
module.exports = router;