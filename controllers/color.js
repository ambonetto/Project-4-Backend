// importing; letting controllers know about the color model
const Color = require('../models').Color;

// for get (show color): sending the informaiton back to the client
const allColors = (req, res) => {
    Color.findAll()

    // return the promise object
    .then(allColorOptions => {
        res.json(allColorOptions)
    })
    .catch(err => {
        res.send(`Error: ${err}`)
    })
}

// export all controllers
module.exports = { 
    allColors
}