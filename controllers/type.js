// importing; letting controllers know about the type model
const Type = require('../models').Type;

// for get (show type): sending the informaiton back to the client
const allTypes = (req, res) => {
    Type.findAll()

    // return the promise object
    .then(allTypes => {
        res.json(allTypes)
    })
    .catch(err => {
        res.send(`Error: ${err}`)
    })
}

// export all controllers
module.exports = { 
    allTypes
}