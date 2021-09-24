

//const b3 = document.getElementById('b3');
//console.log(b3)

uid = "bdunmore1@europa.eu"
console.log(uid)

function getFromServer(){
  //e.preventDefault();       //?
  var querryStr =  "http://localhost:3000/user/by-email?email=" + uid;
  console.log(querryStr);
  $.getJSON(querryStr, mydata );
  }


    function mydata(data){
      var text ="<ul>";
      data.forEach(function(item){    
      text = text + uid + `<li> Account:<br><br>  SGD Balance: ${item.balance_sgd}<br> USD Balance: ${item.balance_usd}<br> EUR Balance:: ${item.balance_eur}<br>  
      GBP Balance: ${item.balance_gbp} </li>`
    
      });
      text += "</ul>"
      $(".balance").html(text);   
  }

getFromServer();
//b3.addEventListener('click',getFromServer);




