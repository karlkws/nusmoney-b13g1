const express = require("express");
const database = require('./database'); 
// To import diff file in same folder, use ./ notation. If package, just use package name directly
// ./ means current folder, .. means folder above
const user = require('./user'); 
const account = require('./account'); 

//Create server application
server = express();
server.use(express.json()); // Tell server to use posted data in JSON format

server.use(user.router);
server.use(account.router);

// Tell server to use created router mapping
server.use(router);

// GET requests:

router.get("/", (request, response) => {
    // should have standard 2 args: request, response
    response.send("Welcome to Dev Toolkit #2!");
}); 

router.get("/sum", (request, response) =>{
    let x = parseFloat(request.query.x);
    let y = parseFloat(request.query.y);
    let sum = x+y;

    response.send("Sum is: " + sum.toFixed(1));
});


// POST requests:

router.post("/create", (request, response) =>{
    let name = request.body.name; // use .body for POST instead of .query, so that input will not appear in the URI/URL, for security purpose
    let phone = request.body.phone;
    let age = request.body.age;

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Phone: " + phone);

    response.send("Data received.")
});


// Start server
// listen(server no, error) = Start server on port no., throw error message if any
// Ctrl+C in terminal to stop/restart server after making changes to main.js file 
server.listen(3000, (errors) => {  
    if(errors) {
        console.log("Server ecould not start. Error" + errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});
