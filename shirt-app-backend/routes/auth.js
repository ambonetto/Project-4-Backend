// importing the express library
const express = require('express');

// express router
const router = express.Router();

// import the controller
const ctrl = require('../controllers');

// this is telling it what controller is taking care of it
// this is creating a user to the index
router.post('/signup', ctrl.auth.createNewUser);

// this is creating the login for the client
router.post('/login', ctrl.auth.userLogin);

// this is verifing the user
router.get('/', ctrl.auth.verifyUser);

// exporting router
module.exports = router;