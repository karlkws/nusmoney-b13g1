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
      data.forEach(function(item){ 
        
      const SGD_item = document.createElement('li');
      SGD_item.classList.add('SGD');
      if(`${Math.abs(item.amt_sgd)}` > 0){
      SGD_item.innerHTML = `${item.tran_date.slice(0,10)}-${item.tran_type}  <span> SGD ${item.amt_sgd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>`; 
      }else{
        SGD_item.style.display = "none"
      }
      list.appendChild(SGD_item);

      const GBP_item = document.createElement('li');
      GBP_item.classList.add('GBP');
      if(`${Math.abs(item.amt_gbp)}` > 0){
      GBP_item.innerHTML = `${item.tran_date.slice(0,10)}-${item.tran_type}  <span> GBP ${item.amt_gbp.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>`; 
      }else{
        GBP_item.style.display = "none"
      }
      list.appendChild(GBP_item);

      const EUR_item = document.createElement('li');
      EUR_item.classList.add('EUR');
      
      if(`${Math.abs(item.amt_eur)}` > 0){
        EUR_item.innerHTML = `${item.tran_date.slice(0,10)}-${item.tran_type}  <span> EUR ${item.amt_eur.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>`; 
      }else{
        EUR_item.style.display = "none"
      }
      
      list.appendChild(EUR_item);

      const USD_item = document.createElement('li');
      USD_item.classList.add('USD');
      
      if(`${Math.abs(item.amt_usd)}` > 0){
        console.log(`${item.amt_usd}` )
        USD_item.innerHTML = `${item.tran_date.slice(0,10)}-${item.tran_type} <span>  USD ${item.amt_usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>`
      }else{
        USD_item.style.display = "none"
      }
      
      list.appendChild(USD_item);
          
    });
      
      
      // var text = 
      // `<strong><u>Your transaction history:</u></strong><br><br><table>
      //   <thead><tr>
            
      //       <th>Date</th>
      //       <th>Transaction Type</th>
      //       <th>SGD </th>
      //       <th>USD </th>
      //       <th>EUR </th>
      //       <th>GBP </th>
      //     </tr>
      // </thead>
      // <tbody>`;
      // data.forEach(function(item){ 
      // text = text + 
      // `<tr> 
        
      //   <td>${item.tran_date.slice(0,10)}</td> 
      //   <td>${item.tran_type}</td> 
      //   <td>${item.amt_sgd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
      //   <td>${item.amt_usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
      //   <td>${item.amt_eur.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
      //   <td>${item.amt_gbp.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </td> 
      // </tr>`
      // });
      // text += `</tbody></table><br><br>`


      //$(".txn-history").html(text);   
    };
  });
};


getTxn();
//b3.addEventListener('click',getFromServer);




