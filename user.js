const express = require("express");
const database = require('./database'); 
const cors = require('cors');

const app = express();
app.use(cors());

// Create router object
router = express.Router();  



// Find user by email
router.get("/user/by-email", (request, response) => {
    database.connection.query(
      `select user_id, first_name, last_name, last_tran_date, balance_sgd, balance_usd, balance_eur, balance_gbp from user 
      where email = '${request.query.email}'`,
      (errors, records) => {
        if (errors) {
          console.log(errors);
          response.status(500).send("An error occurred in the backend");
        } else {
          response.status(200).send(records);
        }
      }
    );
});

  
// Add new user
router.post("/user/add-user", (request, response) => {
    let user = request.body;
    database.connection.query(
        `INSERT INTO 
        user(first_name, last_name, email, mobile, password, date_created)
        values('${user.first_name}', '${user.last_name}', '${user.email}', '${user.mobile}', '${user.password}', NOW() );`,
        (errors, records) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("User registration failed, some error occurred at the backend. Please check your input fields in the sign up form.");
            } 
            else {
                console.log("Created new user!");
                response.redirect('/public/register_success.html');
            }
        }
    );
});



module.exports = {
    router
};