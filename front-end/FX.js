/* References
https://github.com/karlkws/nusmoney-b13g1

Source : Polygon.io

*/
const b1 = document.getElementById('b1');
// const b1 = document.getElementsByClassName("b1");


 function getInputValue(){
  // Selecting the input element and get its value 
  const stock =   document.getElementById('ticker').value;
  const datefrom = document.getElementById('transaction').value;
  const dateto =  document.getElementById('transaction').value;
  const value =  document.getElementById('Value').value;

  Price ='https://api.polygon.io/v2/aggs/ticker/'+'C:'+[stock]+'/range/1/day/'+[datefrom]+'/'+[dateto]+'?adjusted=true&sort=asc&limit=50000&apiKey=f6NqhgBtOpJ9ceSA2w_C2j4Tj43VREQc' //Aggregates (Bars) API
  
  console.log(Price);
  console.log(value);


  $.getJSON(Price, function(data) {
    console.log(data);
    console.log(data.results);
  
  //Insert FX ticker by in the form of getElementby ID

   document.getElementById('symbol').innerHTML = data.ticker;


   //Declare Base and Quote Currency
   let Quote = (data.ticker[5]+data.ticker[6]+data.ticker[7]);
   let Base = data.ticker[2]+data.ticker[3]+data.ticker[4];
   console.log(Base,Quote);
   
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
              <th>Date</th>
              <th>ExchangeRate</th>
              <th>Quote Amount</th>
              <th>Conversion Amount</th>
            </tr>
        </thead>

    <tbody>`;
    pricedata.forEach((price) => {

      text = text + `<tr><td>${new Date(price.t).toLocaleString("en-SG", options)}</td><td>${price.c.toFixed(5)} </td><td>${Quote  +" "+ (value)}</td><td>${Base +" "+ (value/price.c).toFixed(2)} </td></tr>`
     

       
    });
    text += `</tbody></table><br>`
    

    //Compute the conversion value
    let Conversion_value = value/pricedata[0].c;
    console.log(Conversion_value);

    // JS Object:
    // 1) Tran date 2) Value (Base currency) 3) Conversion_value

// Set up JS Object
 // Check Base and Quote currency string and add negative for base currency   
var sgd = null;
var usd = null;
var eur = null;
var gbp = null;
 
 if (Quote === 'SGD') {
    sgd = value * -1
    } else if (Quote === 'USD'){
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

  var postData ={ 
      user_id: 1, //to modify to be dynamic var
      tran_type: 'Conversion',  
      tran_date: datefrom,
      amt_sgd: sgd,
      amt_usd: usd,
      amt_eur: eur,
      amt_gbp: gbp
  };

  postDataJSON = JSON.stringify(postData); // convert JS object to JSON object
  console.log(postDataJSON); // JSON Object to be used for back-end
  

    $("#mypanel").html(text);
  
    });
 }

 
 function refresh () {
  location.reload();
 }

function confirm(e) {
  e.preventDefault();
  addtran(postDataJSON);
  updatebalance(postDataJSON)
  console.log("confirm function ran");
}

//ajax 1 add tran
function addtran(postdata){// pass your data in method
     console.log(postdata);
     // $.ajax({})
     $.ajax({
             type: "POST",
             url: "http://localhost:3000/transaction/add-transaction",
             data: postDataJSON,// now data come in this function
             contentType: "application/x-www-form-urlencoded; charset=UTF-8", // standard
             crossDomain: true, // for security purpose
             dataType: "text", // JSON object string is text

             success: function (data, status, jqXHR) {

               //  alert("success");// write success in " "
                 alert(status);
                 document.getElementById("output").innerText = data;
             },

             error: function (jqXHR, status) {
                 // error handler
                 //console.log(jqXHR);
                 alert('fail ' + status.code);   
             }
          });

    }

//ajax 2 update user balance
function updatebalance(postdata){// pass your data in method
  console.log(postdata);
  // $.ajax({})
  $.ajax({
          type: "PUT",
          url: "http://localhost:3000/user/update",
          data: postDataJSON,// now data come in this function
          contentType: "application/x-www-form-urlencoded; charset=UTF-8", // standard
          crossDomain: true, // for security purpose
          dataType: "text", // JSON object string is text

          success: function (data, status, jqXHR) {

            //  alert("success");// write success in " "
              alert(status);
              document.getElementById("output").innerText = data;
          },

          error: function (jqXHR, status) {
              // error handler
              //console.log(jqXHR);
              alert('fail ' + status.code);   
          }
       });
      }
 
 
b1.addEventListener("submit", confirm);

     

  