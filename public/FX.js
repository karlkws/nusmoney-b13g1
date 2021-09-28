/* References
https://github.com/karlkws/nusmoney-b13g1

Source : Polygon.io

*/

function getInputValue() {
  // Selecting the input element and get its value 
  const quote =   document.getElementById('quote').value.toUpperCase();
  const base =   document.getElementById('base').value.toUpperCase();
  const datefrom = document.getElementById('transaction').value;
  const dateto =  document.getElementById('transaction').value;
  const value =  document.getElementById('Value').value;
  
  let stock = (base+quote);
  console.log(stock);

  Price ='https://api.polygon.io/v2/aggs/ticker/'+'C:'+[stock]+'/range/1/day/'+[datefrom]+'/'+[dateto]+'?adjusted=true&sort=asc&limit=50000&apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc' //Aggregates (Bars) API
  
  console.log(Price);
  console.log(value);


  $.getJSON(Price, function(data) {
    console.log(data);
    console.log(data.results);
  
    //Insert FX ticker by in the form of getElementby ID
    document.getElementById('symbol').innerHTML = data.ticker;

    //Declare Base and Quote Currency
    //let Quote = (data.ticker[5]+data.ticker[6]+data.ticker[7]);
    //let Base = data.ticker[2]+data.ticker[3]+data.ticker[4];
    let Quote = quote;
    let Base = base;
   
    //Create a table to store and display the given stock prices
    let pricedata = data.results;

    //for Date function
    var options = {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    };

    //Loop through the data using foreach and put all the results into a table
    var text =`<br><table>
            <thead>
              <tr>
                <th>Date </th>
                <th>Exchange Rate<br>(${Quote}:${Base})</th>
                <th>From </th>
                <th>To </th>
              </tr>
          </thead>

      <tbody>`;
      pricedata.forEach((price) => {
        text = text + 
        `<tr> 
          <td>${new Date(price.t).toLocaleString("en-SG", options)}</td> 
          <td>1 : ${price.c.toFixed(5)} </td> 
          <td>${Quote  +" "+ (value)}</td> 
          <td>${Base +" "+ (value/price.c).toFixed(2)} </td> 
        </tr>`
      });
      text += `</tbody></table><br>`
    
      $("#mypanel").html(text);

    //Compute the conversion value
    let Conversion_value = value/pricedata[0].c;
    console.log(Conversion_value);

    // Set up JS Object
    // Check Base and Quote currency string and add negative for base currency   
    var sgd = 0;
    var usd = 0;
    var eur = 0;
    var gbp = 0;
  
    if (Quote === 'SGD') {
        sgd = value * -1
        } else if (Quote === 'USD') {
          usd = value * -1
        } else if  (Quote === 'EUR') {
          eur = value * -1
        } else if  (Quote === 'GBP') {
          gbp = value * -1
        }; 

    if (Base === 'SGD') {
      sgd = Conversion_value 
      } else if (Base === 'USD'){
        usd = Conversion_value 
      } else if  (Base === 'EUR') {
        eur = Conversion_value 
      } else if  (Base === 'GBP') {
        gbp = Conversion_value 
      }; 

      $.getJSON("http://localhost:3000/admin", function (response) {
          var email = response.e_mail;
          var u_id = response.user_id; // retrieve logged session's user_id
                
          var postData = { 
            user_id: u_id, //to modify to be dynamic var
            tran_type: 'Conversion',  
            tran_date: datefrom,
            amt_sgd: sgd,
            amt_usd: usd,
            amt_eur: eur,
            amt_gbp: gbp
          };

          postDataJSON = JSON.stringify(postData); // convert JS object to JSON object
          console.log(postDataJSON); // JSON Object to be used for back-end   
        });
    }
)};
 
function refresh() {
  location.reload();
}

function goBack() {
  window.location.href = '/public/home.html';
}

function confirm() {
  addtran(postDataJSON);
  updatebalance(postDataJSON);
  console.log("Confirmed transaction & update balance successful!");
  alert("Balance Updated");
  window.location.reload();
}

//ajax 1 add tran
function addtran(postdata){// pass your data in method
     console.log(postdata);
     // $.ajax({})
     $.ajax({
             type: "POST",
             url: "http://localhost:3000/transaction/add-transaction",
             data: postDataJSON,// now data come in this function
             contentType: "application/json; charset=UTF-8", // standard
             crossDomain: true, // for security purpose
             dataType: "json", 

             success: function (data, status, jqXHR) {

               //  alert("success");// write success in " "
                 alert(status);
                 
             },

             error: function (jqXHR, status) {
                 // error handler
                 //console.log(JSON.stringify(error));
                 //alert('fail ' + status.code);   
             }
          });

    }

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
          dataType: "json", 

          success: function (data, status, jqXHR) {

            //  alert("success");// write success in " "
              alert(status);
              
          },

          error: function (jqXHR, status) {
              // error handler
              // console.log(jqXHR);
              // alert('fail ' + status.code);   
          }
       });
      }
 
 


     

  