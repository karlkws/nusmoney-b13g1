function getUserInfo() {
  //e.preventDefault();     //?
  var querryStr = "http://localhost:3000/admin";
  console.log(querryStr);
  $.getJSON(querryStr, function (response) {
      var email = response.e_mail;
      //console.log(email);
      uid = email;
      //console.log(uid)
      
      //e.preventDefault();     //?
      var querryStr =  "http://localhost:3000/user/by-email?email=" + uid;
      // console.log(querryStr);
      $.getJSON(querryStr, mydata );
    

    function mydata(data) {
      var text = 
      `<strong><u>Your account info:</u></strong><br><br><table>
        <thead><tr>
            
            <th>Account Holder</th>
            <th>SGD </th>
            <th>USD </th>
            <th>EUR </th>
            <th>GBP </th>
          </tr>
      </thead>
      <tbody>`;
      data.forEach(function(item){ 
      text = text + 
      `<tr> 
        
        <td>${item.first_name} ${item.last_name}</td> 
        <td>${item.balance_sgd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${item.balance_usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${item.balance_eur.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${item.balance_gbp.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
      </tr>`
      });
      text += `</tbody></table><br><br>`


      $(".balance").html(text);   
    };
  });
};


getUserInfo();
//b3.addEventListener('click',getFromServer);




