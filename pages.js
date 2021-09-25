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
                // console.log(results);
                // console.log(results[0].user_id);
                request.session.u_id = results[0].user_id;
                console.log('User log in success!');
                // response.redirect('/front-end/FX.html'); // actual page to redirect to, TO BE EDITED AND FINALIZED
                response.redirect('/front-end/hometesting.html'); // for testing purpose
			} else {
				console.log('Incorrect Email and/or Password!');
                
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


// 3. Landing Page => Deposit Page


// 4. Landing Page => Transfer Page


// 5. Landing Page => FX Page



module.exports = {
    router
};

