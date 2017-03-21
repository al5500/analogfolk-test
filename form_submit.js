$(document).ready(function(){
  $("button").on('click', function(){
    $.ajax({
        url: 'https://response-test.titan.analogfolk.com/', 
        type : "POST", 
        dataType : 'json', 
        data : $("form").serialize(), 
        success : function(result) {
          $('.center').html("<p> Thanks. You'll see the points in your account within 5 working days.</p>");
          console.log(result);
        },
        error: function(xhr, resp, text) {
          console.log(xhr, resp, text);
        }
    })
  });
});