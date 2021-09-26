function getTxn() {
  //e.preventDefault();     //?
  var querryStr = "http://localhost:3000/admin";
  console.log(querryStr);
  $.getJSON(querryStr, function (response) {
      var email = response.e_mail;
      var u_id = response.user_id;
      // console.log(u_id);
            
      //e.preventDefault();     //?
      var querryStr =  "http://localhost:3000/transaction/by-user_id?user_id=" + u_id;
      // console.log(querryStr);
      $.getJSON(querryStr, mydata );
    

    function mydata(data) {
      var text = 
      `<strong><u>Your transaction history:</u></strong><br><br><table>
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
        
        <td>${item.tran_date.slice(0,10)}</td> 
        <td>${item.tran_type}</td> 
        <td>${item.amt_sgd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${item.amt_usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${item.amt_eur.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
        <td>${item.amt_gbp.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
      </tr>`
      });
      text += `</tbody></table><br><br>`


      $(".txn-history").html(text);   
    };
  });
};


getTxn();
//b3.addEventListener('click',getFromServer);




