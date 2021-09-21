/* References
https://github.com/karlkws/nusmoney-b13g1

Source : Polygon.io

*/

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

    

    $(".mypanel").html(text);
  
    });

 }

 
 function refresh () {
  location.reload();
 }
