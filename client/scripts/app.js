// YOUR CODE HERE:
var app = {};

app.init = function(){};
app.send = function(message){
  $.ajax({
    type: "POST",
    url: 'https://api.parse.com/1/classes/chatterbox',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function(data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      console.log('chatterbox: Failed to send message');
    }
  }); 
};

app.fetch = function(){
  $.ajax({
    type:"GET",
    url: this.url,
    data: JSON.stringify(),
  });
};

app.clearMessages = function() {
  $('div#chats').on("click", function(){
    console.log(this);
    $(this).remove();

  })

}
