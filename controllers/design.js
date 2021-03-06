// importing; letting controllers know about the design model
const Design = require('../models').Design;

// for get (show design): sending the informaiton back to the client
const allDesign = (req, res) => {
    Design.findAll()

    // return the promise object
    .then(allPrints => {
        res.json(allPrints)
    })
    .catch(err => {
        res.send(`Error: ${err}`)
    })
}

// for post (new design): sending the information back to the client
const newDesign = (req, res) => {
    Design.create(req.body)

    // return the promise object
    .then(newDesigns => {
        res.json(newDesigns)
    })
    .catch(err => {
        res.send(`Error: ${err}`)
    })
}

// for delete (delete design): sending the information back to the client
const deleteDesign = (req, res) => {
    Design.findByPk(req.params.designId)

    // return the promise object
    .then(foundDesign => {
        Design.destroy({
            where: {id: req.params.designId}
        })
        // return the promise object
        .then(() => {
            res.send('Success! Design has been deleted');
        })
    })
    .catch(err => {
        res.send(`Error: ${err}`);
    })
}

// export all controllers
module.exports = { 
    allDesign,
    newDesign,
    deleteDesign
}