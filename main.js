const express = require("express");
const database = require('./database'); 
const cors = require('cors');
const session = require('express-session');
const path = require('path');


const user = require('./user'); 
const transaction = require('./transaction'); 
const pages = require('./pages');

//Create server application
server = express();
server.use(cors());
server.use(express.json()); // Tell server to use posted data in JSON format
server.use(express.urlencoded({ extended: false })); // Required to take object from input form in html

server.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

server.use('/front-end', express.static(path.join(__dirname, 'front-end')))
server.use(user.router);
server.use(transaction.router);
server.use(pages.router);



// Tell server to use created router mapping
server.use(router);

// Start server
// Ctrl+C in terminal to stop/restart server after making changes to main.js file 
server.listen(3000, (errors) => {  
    if(errors) {
        console.log("Server ecould not start. Error: " + errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});
