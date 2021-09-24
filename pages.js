const express = require("express");
const database = require('./database'); 
const cors = require('cors');
const session = require('express-session');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // Required to take object from input form in html
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use('/front-end', express.static(path.join(__dirname, 'front-end')))
// Create router object
router = express.Router();


// 1. Log In page
router.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/front-end/login.html'));
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
				
                // console.log('Log in succeess!');
                
                response.redirect('/front-end/FX.html');
			} else {
				console.log('Incorrect Email and/or Password!');
                // response.redirect('/front-end/relogin.html');
                response.redirect('/front-end/relogin.html');;
			}			
			response.end();
		});
	} else {
        console.log("Please enter Email and Password!");
        response.redirect('/front-end/relogin.html');
        response.end();
    }
    
});


// 3. Landing Page => Deposit Page


// 4. Landing Page => Transfer Page


// 5. Landing Page => FX Page



module.exports = {
    router
};

