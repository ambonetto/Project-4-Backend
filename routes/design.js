// importing the express library
const express = require('express');

// express router
const router = express.Router();

// import the controller
const ctrl = require('../controllers');

// this is telling it what controller is taking care of it
// this is displaying all designs for the client
router.get('/', ctrl.design.allDesign);

// this is creating a new design for the client
router.post('/new', ctrl.design.newDesign);

// this is deleting a design for the client
router.delete('/:designId', ctrl.design.deleteDesign);

// exporting router
module.exports = router;