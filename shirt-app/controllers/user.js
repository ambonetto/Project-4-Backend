// importing; letting controllers know about the user model
const User = require('../models').User;

// for get (show profile): sending the informaiton back to the client
const userProfile = (req, res) => {
    User.findByPk(req.user.id)

    // return the promise object
    .then(userProfile => {
        res.json(userProfile)
    })
}

// for put (edit profile): sending the information back to the client
const editProfile = (req, res) => {
    // updating user profile
    User.update(req.body, {
        where: {id: req.user.id}, 

        // by default, returing is set as false
        // true will send back the updated object back otherwise false will send the old object back
        returning: true
    })

    // return the promise object
    .then(updateUser => {
        res.json(updateUser)
    })
}

// export all controllers
module.exports = {
    userProfile,
    editProfile
}