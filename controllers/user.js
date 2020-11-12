// importing; letting controllers know about the user model
const User = require('../models').Users;

// for get (show profile): sending the informaiton back to the client
const userProfile = (req, res) => {
    User.findByPk(req.user.id)

    // return the promise object
    .then(userProfile => {
        res.json(userProfile);
    })
    .catch(err => {
        res.send(`Error: ${err}`);
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
        User.findByPk(req.user.id)

        // return the promise object
        .then(userProfile => {
            res.json(userProfile);
        })
    })
    .catch(err => {
        res.send(`Error: ${err}`);
    })
}

// for delete (removing profile): sending the information back to the client
const deleteProfile = (req, res) => {
    // delete user profile
    User.destroy({
        where: {id: req.user.id}
    })

    // return the promise object
    .then(() => {
        res.send('Success');
    })
    .catch(err => {
        res.send(`Error: ${err}`);
    })
}

// export all controllers
module.exports = {
    userProfile,
    editProfile, 
    deleteProfile
}