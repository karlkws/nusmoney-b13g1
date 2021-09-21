const express = require("express");
const database = require('./database'); 
// To import file in same folder, use ./ notation. 
// If package, just use package name directly.
// ./ = current folder, .. = folder above

const user = require('./user'); 
const transaction = require('./transaction'); 

//Create server application
server = express();
server.use(express.json()); // Tell server to use posted data in JSON format

server.use(user.router);
server.use(transaction.router);

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
