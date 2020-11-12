// importing the express library
const express = require('express');

// express router
const router = express.Router();

// import the controller
const ctrl = require('../controllers');

// this is telling it what controller is taking care of it
// this is displaying a user profile for the client
router.get('/:userId', ctrl.user.userProfile);

// this is editing the user profile for the client
router.put('/:userId', ctrl.user.editProfile)

// this is deleting the user profile fro the client
router.delete('/:userId', ctrl.user.deleteProfile);

// exporting router
module.exports = router;