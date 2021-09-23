const express = require("express");
const database = require('./database'); 
const cors = require('cors');
const app = express();

app.use(cors());
// Create router object
router = express.Router();

// GET

router.get("/account/all", (request, response) => {
    let accounts = data.get_all_accounts(); // get all the accounts
    response.send(accounts);
});





router.get("/transaction/by-email", (request, response) => {
      
    database.connection.query(
      `select 
        tran_date,
        tran_type, 
        amt_sgd,
        amt_usd,
        amt_eur,
        amt_gbp
      from transaction 
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



// 4. ADD TRANSACTION API
// TO UPDATE FRONT-END TO CHECK FOR INPUT CURRENCY (POSITIVE OR NEGATIVE) AND SET TRAN_TYPE 

  router.post("/transaction/add-transaction", (request, response) => {
    let user = request.body; // Step 1: get user object from request
    // Step 2: add user 
    database.connection.query(
        `
        INSERT INTO
        transaction (
            user_id,
            tran_type,
            tran_date,
            amt_sgd,
            amt_usd,
            amt_eur,
            amt_gbp
        )
        values (${user.user_id}, '${user.tran_type}', NOW(), ${user.amt_sgd},${user.amt_usd}, ${user.amt_eur},${user.amt_gbp})`,        


        (errors, records) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Some error occurred at the backend");
            } 
            else {
                response.status(200).send("Added transaction!");
            }
        }
    )
});

    router.put("/user/update", (request, response) => {
        let user = request.body;
        database.connection.query(
        `UPDATE
        user as u
        SET 
            u.balance_sgd = u.balance_sgd + ${user.amt_sgd},
            u.balance_usd = u.balance_usd + ${user.amt_usd},
            u.balance_eur = u.balance_eur + ${user.amt_eur},
            u.balance_gbp = u.balance_gbp + ${user.amt_gbp},
            u.last_tran_date = NOW()
        WHERE u.user_id = ${user.user_id};`,
        
        (errors, records) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Some error occurred at the backend");
            } 
            else {
                response.status(200).send("Created new user!");
            }
        }
    )
});




// POST

router.post("/account/add", (request, response) => {
    let account = request.body; // Step 1: get account object from request
    data.add_account(account); // Step 2: add account 
    response.send("Account added succcesfully!"); 
});


module.exports = {
    router
};