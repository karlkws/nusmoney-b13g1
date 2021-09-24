function getEmail(){
    //e.preventDefault();       //?
    var querryStr = "http://localhost:3000/admin";
    console.log(querryStr);
    $.getJSON(querryStr, function (response) {
        var text = response.e_mail
        $("#test").html(text);
    });
  };

getEmail();