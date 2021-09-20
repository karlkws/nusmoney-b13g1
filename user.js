const express = require("express");
const database = require('./database'); 

// Create router object
router = express.Router();

// // GET (old)

// router.get("/user/all", (request, response) => {
//     let users = data.get_all_users(); // get all the users
//     response.send(users);
// });

// router.get("/user/by-uid", (request, response) => {
//     let user_id = request.query.user_id;
//     let user = data.get_user_by_user_id(user_id); // get a user based on user_id
//     response.send(user);
// });


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
  
  router.get("/user/by-uid", (request, response) => {
    // let user_id = request.query.user_id;
    // let user = data.get_user_by_user_id(user_id); // get a user based on user_id I get in the request.
    // response.send(user);
  
    database.connection.query(
      `select * from user where user_id = '${request.query.user_id}'`,
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


// // POST (old)

// router.post("/user/add", (request, response) => {
//     let user = request.body; // Step 1: get user object from request
//     data.add_user(user); // Step 2: add user 
//     response.send("User added succcesfully!"); 
// });

// POST - query from MySQL database

router.post("/user/add", (request, response) => {
    let user = request.body; // Step 1: get user object from request
    // Step 2: add user 
    database.connection.query(
        `INSERT INTO 
        user(first_name, last_name, email, phone, plan_id, signup_date)
        values('${user.first_name}', '${user.last_name}', '${user.email}', '${user.phone}', '${user.plan_id}', NOW())`,
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