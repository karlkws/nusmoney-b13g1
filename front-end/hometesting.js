function getEmail(){
    //e.preventDefault();       //?
    var querryStr = "http://localhost:3000/admin";
    console.log(querryStr);
    $.getJSON(querryStr, function (response) {
        var email = response.e_mail
        console.log(email)


        var emailStr =  "http://localhost:3000/user/by-email?email=" + email;
        console.log(emailStr);
        $.getJSON(emailStr, mydata );
        


          function mydata(data){
            var text ="<ul>";
            data.forEach(function(item){    
            text = text +  `<li> Account:<br><br>  SGD Balance: ${item.balance_sgd}<br> USD Balance: ${item.balance_usd}<br> EUR Balance:: ${item.balance_eur}<br>  
            GBP Balance: ${item.balance_gbp} </li>`
          
            });
            text += "</ul>"
            $(".balance").html(text);   
        }

        $("#test").html(email);
    });
  };

getEmail();