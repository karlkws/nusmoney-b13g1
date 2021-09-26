function getUserName() {
    //e.preventDefault();       //?
    var querryStr = "http://localhost:3000/admin";
    console.log(querryStr);

    $.getJSON(querryStr, function (response) {
        var email = response.e_mail;
        var u_id = response.user_id;
        // console.log(email);
        // console.log(u_id);


      var emailStr =  "http://localhost:3000/user/by-email?email=" + email;
      //console.log(emailStr);
      $.getJSON(emailStr, function (response) {
          //console.log(response[0].first_name);

          $("#user").html(`<strong>`+ response[0].first_name + " " + response[0].last_name + `</strong>` + " (" + email + ")!");
      });
    });
  };


function logOut() {
  window.location.href = "http://localhost:3000/logout"
};

getUserName();