

//const b3 = document.getElementById('b3');
//console.log(b3)

function getEmail(){
  //e.preventDefault();       //?
  var querryStr = "http://localhost:3000/admin";
  console.log(querryStr);
  $.getJSON(querryStr, function (response) {
      var email = response.e_mail;
      console.log(email);

      uid = email;
      console.log(uid)
      
      
        //e.preventDefault();       //?
        var querryStr =  "http://localhost:3000/user/by-email?email=" + uid;
        console.log(querryStr);
        $.getJSON(querryStr, mydata );
        

  

  })
}



    function mydata(data){
      // var text ="<ul>";
      // data.forEach(function(item){    
      // text = text + uid + `<li> Balance:<br><br> SGD : ${item.balance_sgd} | USD : ${item.balance_usd}  |    EUR : ${item.balance_eur} |    GBP : ${item.balance_gbp} </li><br>`
    
      // });
      // text += "</ul>"
      var text=`<strong>Balance</strong> :<br><br><table>
      <thead><tr>
          <th>Account Holder</th>
          <th>SGD </th>
          <th>USD</th>
          <th>EUR </th>
          <th>GBP</th>
        </tr>
    </thead>

<tbody>`;
data.forEach(function(item){ 
  text = text  + 
  `<tr> 
    <td>${uid}</td> 
    <td>${item.balance_sgd}</td> 
    <td>${item.balance_usd} </td> 
    <td>${item.balance_eur}</td> 
    <td>${item.balance_gbp} </td> 
  </tr>`
});
text += `</tbody></table><br><br>`


      $(".balance").html(text);   
  }

//getFromServer();
getEmail();
//b3.addEventListener('click',getFromServer);




