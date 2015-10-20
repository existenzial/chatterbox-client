// YOUR CODE HERE:
var app = {};

app.init = function(){ 
  app.fetch();
  app.addFriend();
  app.handleSubmit();

};
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
    success: function(){
      console.log("Successful retrieval")
    },
    error: function(){
      console.log("Sorry, try again")
    }
  });
};



app.clearMessages = function() {
  $('#chats').html('');
}

app.addMessage = function(userName){
  $('#chats').html('<div>');
  userName = this.userName;
}

app.addRoom = function(){
  $('#roomSelect').html('<option>')
};

app.addFriend = function(){
  // $('#main').on('click', function(){
  // $('.username').find();  
  // });
};

app.handleSubmit = function (message){
  // $('#send .submit').submit(function(){
  //   message = $(message).val();
  // })
}
app.init();