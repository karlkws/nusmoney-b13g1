const express = require("express");
const database = require('./database'); 

// Create router object
router = express.Router();


// GET - query from MySQL database
router.get("/user/all", (request, response) => {
    // let users = data.get_all_users(); // somehow get the users;
    // response.send(users);
  
    database.connection.query(`select * from user`, (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("An error occurred in the backend");
      } else {
        response.status(200).send(records);
      }
    });
  });
  


//2. Find user by email
  router.get("/user/by-email", (request, response) => {
    // let user_id = request.query.user_id;
    // let user = data.get_user_by_user_id(user_id); // get a user based on user_id I get in the request.
    // response.send(user);
  
    database.connection.query(
      `select * from user 
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

  
//3. Add new user
router.post("/user/add-user", (request, response) => {
    let user = request.body; // Step 1: get user object from request
    // Step 2: add user 
    database.connection.query(
        `INSERT INTO 
        user(first_name, last_name, email, mobile, password, date_created)
        values('${user.first_name}', '${user.last_name}', '${user.email}', '${user.mobile}', '${user.password}', NOW() );`,
        
        /*
INSERT INTO 
user (first_name, last_name, email, mobile, password, date_created)
values ('Henrik','Ahnberg','godgamer@gmail.com','696969','smallpeepee',NOW());
        */
        (errors, records) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Some error occurred at the backend");
            } 
            else {
                response.status(200).send("Created new user!");
            }
        }
    );
});



module.exports = {
    router
};