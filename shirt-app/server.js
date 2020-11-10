// importing the express library
const express = require('express');

// import env
require('dotenv').config();

// importing method override
const methodOverride = require('method-override');

// importing JWT 
const jwt = require('jsonwebtoken');

// importing router
const routes = require('./routes');

// app is an object
const app = express();

// middleware to convert request body into urlencoded object
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// verify the token
const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser) {
            return res.send(`Error: ${err}`); 
        }

        // set the decoded payload to req object as the user information (username, id)
        req.user = decodedUser;

        // for controller to go to the next line of the code
        next();
    })
}

// middleware to redirect for controllers and routes
// will return something to be seen by the client
app.use('/auth', routes.auth);
app.use('/user', verifyToken, routes.user);

// running the app on a port 
app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})