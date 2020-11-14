// import bcrypt (hashing algorithm)
const bcrypt = require('bcryptjs');

// importing the env configuration
require('dotenv').config();

// importing the JWT library
const jwt = require('jsonwebtoken');

// importing; letting controllers know about the user model
const User = require('../models').Users;

// for post (creating a new user): sending the information back to the client
const createNewUser = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            res.send(`Error: ${err}`)
        }
        console.log(req)
        // pass in the password, salt value, and error (if there is one)
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err) {
                res.send(`Error: ${err}`)
            }

            // password equal to the hashed password
            req.body.password = hashedPwd;

            // create a new User
            // create new User's password
            User.create(req.body)

            // return the promise object
            .then(newUser => {
                const token = jwt.sign(
                    {
                        id: newUser.id, 
                        username: newUser.username
                    }, 
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "30 days"
                    }
                )

                res.json({
                    "token": token, 
                    "user": newUser
                })
            })
            // throw an error is the username is already taken
            .catch(err => {
                res.send(`Error: ${err}`);
            })
        })
    })
}

// for post (user logging in): sending the information back to the client
const userLogin = (req, res) => {
    // obtains the first entry it finds (that fulfills the operation query options, if provided)
    // only one user
    User.findOne({
        where: {
            username: req.body.username
        }
    })

    // return the promise object
    .then(foundUser => {
        // finding a user that is not null; object is there with some value
        if(foundUser) {
            bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
                if(match){

                    const token = jwt.sign(
                        {
                            id: foundUser.id, 
                            username: foundUser.username
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "30 days"
                        }
                    )

                    res.json({
                        "token": token, 
                        "user": foundUser
                    })
                } else {
                    res.send("Error: Incorrect Username or password");
                }
            })
        } else {
            res.send("Error: Incorrect Username or password");
        }
    })
    .catch(err => {
        res.send(`Error: ${err}`);
    })
}

// for get (verify User): sending the informaiton back to the client
const verifyUser = (req, res) => {
    User.findByPk(req.user.id, {
        attributes: ['id', 'username', 'email', 'name', 'admin', 'password']
    })
    
    // return the promise object
    .then(foundUser => {
        res.json(foundUser);
    })
    .catch(err => {
        res.send(`Error: ${err}`);
    })
}

// export all controllers
module.exports = {
    createNewUser,
    userLogin,
    verifyUser
}