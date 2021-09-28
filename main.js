const express = require("express");
const database = require('./database'); 
const cors = require('cors');
const session = require('express-session');
const path = require('path');

const user = require('./user'); 
const transaction = require('./transaction'); 

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
server.use('/public', express.static(path.join(__dirname, 'public')))
server.use(user.router);
server.use(transaction.router);



// 1. Log In page
router.get('/', function(request, response) {
	response.redirect('/public/login.html');
});

// 2. After Log in => Landing Page
router.post('/auth', function(request, response) {
    var email = request.body.email;
	var password = request.body.password;
	if (email && password) {
		database.connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
                // console.log(results);
                // console.log(results[0].user_id);
                request.session.u_id = results[0].user_id;
                console.log('User log in success!');
                response.redirect('/public/home.html'); 
			} else {
				console.log('Incorrect Email and/or Password!');
                
                response.redirect('/public/relogin.html');;
			}			
			response.end();
		});
	} else {
        console.log("Please enter Email and Password!");
        response.redirect('/public/relogin.html');
        response.end();
    }
    
});

// 3. Retrieve stored email of logged-in user within the session
router.get('/admin', (request, response) => {
    if (request.session.email) {
        var output = {"e_mail": request.session.email, "user_id": request.session.u_id};
        response.send(output);
        // console.log("u_id is " + output.user_id);
        return output;
    } else {
        response.send("Error retrieving user session's email.");
    }
});

// 4. Route to Register page
router.get('/register', function(request, response) {
	response.redirect('/public/register.html');
});


// 5. Log out
router.get('/logout', function(request, response, next) {
	// remove the req.user property and clear the login session
	//request.logout();

	// destroy session data
	request.session = null;
    //console.log(request.session);
	// redirect to login page
	response.redirect('/public/login.html');
});



// Tell server to use created router mapping
server.use(router);

// Start server
server.listen(3000, (errors) => {  
    if(errors) {
        console.log("Server ecould not start. Error: " + errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});
