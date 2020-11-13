// importing; letting controllers know about the shirt model
const Shirt = require('../models').Shirts;

// for get (show profile): sending the informaiton back to the client
const allShirts = (req, res) => {
    Shirt.findAll()

    // return the promise object
    .then(displayShirts => {
        console.log(displayShirts)
        res.json(displayShirts);
    })
    .catch(err => {
        res.send(`Error: ${err}`);
    })
}

// export all controllers
module.exports = {
    allShirts
}