function confirm() {
    var value =  document.getElementById("Value").value;
    //console.log(value);
    var currency =   document.getElementById("Currency").value;
    
    var sgd = 0;
    var usd = 0;
    var eur = 0;
    var gbp = 0;
     
     if (currency === 'SGD') {
        sgd = value
        } else if (currency === 'USD'){
          usd = value
        } else if  (currency === 'EUR') {
          eur = value
        } else if  (currency === 'GBP') {
          gbp = value
        }; 
    
      $.getJSON("http://localhost:3000/admin", function (response) {
          var email = response.e_mail;
          var u_id = response.user_id; // retrieve logged session's user_id
    
          var postData ={ 
              user_id: u_id, //to modify to be dynamic var
              tran_type: 'Deposit',  
              amt_sgd: sgd,
              amt_usd: usd,
              amt_eur: eur,
              amt_gbp: gbp
          };
      
        postDataJSON = JSON.stringify(postData); // convert JS object to JSON object
        console.log(postDataJSON); // JSON Object to be used for back-end
      
    
       
      addtran(postDataJSON);
      updatebalance(postDataJSON)
      console.log("Confirmed deposit transaction successful!");
      alert("Balance Updated");
      window.location.reload();
    });
  };

function goBack() {
    window.location.href = '/public/home.html';
}
  
    
    
function addtran(postdata){// pass your data in method
  console.log(postdata);
  // $.ajax({})
  $.ajax({
          type: "POST",
          url: "http://localhost:3000/transaction/add-transaction",
          data: postDataJSON,// now data come in this function
          contentType: "application/json; charset=UTF-8", // standard
          crossDomain: true, // for security purpose
          dataType: "json", // JSON object string is text

          success: function (data, status, jqXHR) {

            //  alert("success");// write success in " "
              alert(status);
              document.getElementById("output").innerText = data;
          },

          error: function (jqXHR, status) {
              // error handler
              //console.log(JSON.stringify(error));
              //alert('fail ' + status.code);   
          }
  });

};

//ajax 2 update user balance
function updatebalance(postdata){// pass your data in method
  console.log(postdata);
  // $.ajax({})
  $.ajax({
          type: "PUT",
          url: "http://localhost:3000/user/updatebalance",
          data: postDataJSON,// now data come in this function
          contentType: "application/json; charset=UTF-8", // standard
          crossDomain: true, // for security purpose
          dataType: "json", // JSON object string is text

          success: function (data, status, jqXHR) {

            //  alert("success");// write success in " "
              alert(status);
              document.getElementById("output").innerText = data;
          },

          error: function (jqXHR, status) {
              // error handler
              //console.log(jqXHR);
              //alert('fail ' + status.code);   
          }
  });
};