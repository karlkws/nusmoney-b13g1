function getEmail() {
  //e.preventDefault();     //?
  var querryStr = "http://localhost:3000/admin";
  console.log(querryStr);
  $.getJSON(querryStr, function (response) {
      var email = response.e_mail;
      var u_id = response.user_id;
      console.log(email);
      console.log(u_id);
      
      //e.preventDefault();     //?
      var querryStr =  "http://localhost:3000/transaction/by-email?email=" + email;
      console.log(querryStr);
      $.getJSON(querryStr, mydata );
    

    function mydata(data) {
      var text = 
      `<strong>Your account info:</strong>:<br><br><table>
        <thead><tr>
            
            <th>Date</th>
            <th>Transaction Type</th>
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
        
        <td>${tran_date}</td> 
        <td>${tran_type}</td> 
        <td>${amt_sgd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${amt_usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${amt_eur} </td> 
        <td>${amt_gbp} </td> 
      </tr>`
      });
      text += `</tbody></table><br><br>`


      $(".Transaction").html(text);   
    };
  });
};

//getFromServer();
getEmail();
//b3.addEventListener('click',getFromServer);




