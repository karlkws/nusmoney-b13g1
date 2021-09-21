const express = require("express");
const data = require('./data'); 

// Create router object
router = express.Router();

// GET

router.get("/account/all", (request, response) => {
    let accounts = data.get_all_accounts(); // get all the accounts
    response.send(accounts);
});

router.get("/account/by-aid", (request, response) => {
    let account_id = request.query.account_id; // get an account based on account_id
    let account = data.get_account_by_account_id(account_id);
    response.send(account);
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