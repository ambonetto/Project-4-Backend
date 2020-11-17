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

// import cors
const cors = require('cors');

// import Body Parser
const bodyParser = require('body-parser');

// allowing for items to be passed thru
const corsOptions = {
    // replacing localhost:3000 with publish surge app
    // origin: ['http://jb-designs.surge.sh'],
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",

    // allows session cookies to be sent back and forth
    credentials: true
}

// middleware to pass information between backend and frontend
// will return something to be seen by the client
app.use(cors(corsOptions));
app.use(bodyParser.json());

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
app.use('/auth/verify', verifyToken, routes.auth);
app.use('/profile', verifyToken, routes.user);
app.use('/designs', verifyToken, routes.design);
app.use('/placeorder', verifyToken, routes.type);
app.use('/placeorder', verifyToken, routes.color);

// running the app on a port 
app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})