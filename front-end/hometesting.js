function getEmail() {
    //e.preventDefault();       //?
    var querryStr = "http://localhost:3000/admin";
    console.log(querryStr);

    $.getJSON(querryStr, function (response) {
        var email = response.e_mail;
        var u_id = response.user_id;
        console.log(email);
        console.log(u_id);


      var emailStr =  "http://localhost:3000/user/by-email?email=" + email;
      console.log(emailStr);
      $.getJSON(emailStr, mydata);
    
        
    
    function mydata(data) {
          // console.log(data[0].first_name);
          //toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
          var text ="Your account balances:<br><ul>";
          data.forEach(function (item) {    
          text = text +  ` 
          
          <li>SGD: ${item.balance_sgd}</li><br> 
          <li>USD: ${item.balance_usd}</li><br> 
          <li>EUR:: ${item.balance_eur}</li><br> 
          <li>GBP: ${item.balance_gbp} </li>`
        
          });
          text += "</ul>"
          $(".balance").html(text);   
      

      $("#user").html(`<strong>`+ data[0].first_name + " " + data[0].last_name + " (" + email + ")!" + `</strong>`);
    };
  
  });
}
getEmail();