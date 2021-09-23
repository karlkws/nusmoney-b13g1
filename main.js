const express = require("express");
const database = require('./database'); 
const cors = require('cors');






// To import file in same folder, use ./ notation. 
// If package, just use package name directly.
// ./ = current folder, .. = folder above

// 1. Logging in



// 2. GET user/by-email
//      - Select < first_name, last_name, email, last_tran_date, balance..  >

// WHhere email = '${request.query.email
//      
// 3. POST user/add-user

// 4. GET transaction/by-user_id

// 5. POST transaction/add-transaction



const user = require('./user'); 
const transaction = require('./transaction'); 

//Create server application
server = express();
server.use(cors());
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
