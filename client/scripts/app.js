// YOUR CODE HERE:
var app = {};

app.init = function(){ 
  app.server = 'https://api.parse.com/1/classes/chatterbox';
  app.fetch();
  app.addFriend();
  app.handleSubmit();
  app.displayMessages();
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
  var response = '';
  $.ajax({
    type:"GET",
    url: this.server,
    data: {order: '-createdAt'},
    contentType: 'application/json',
    success: function(text){
      console.log("Successful retrieval")
      response = text.results;
      console.log('response', response);
      app.displayMessages(response);
      // console.log('text', text);

    },
    error: function(){
      console.log("Sorry, try again")
    }
  //append messages to #chats.
    // $(response).appendTo('#chats');
  });
    console.log('response', response);
};

app.userPost = function(message){
  var $username = $('<div>').addClass('username').text(message.username); 
  var $postText = $('<div>').addClass('postText').text(message.text); 
  var $roomname = $('<div>').addClass('roomname').text(message.roomname);
  var $message = $('<div>').addClass('postChat').attr('data-id', message.objectId).append($username, $postText, $roomname);

  return $message; 
};

app.handleMessage = function(message){
  var $post = app.userPost(message);
  $('#chats').prepend($post);
};

app.displayMessages = function(messages){
  // messages = this.messages;
    // console.log('messages', messages);
  for(var i = 0; i < messages.length; i++) {
    app.handleMessage(messages[i]);
     
  }
};
  //username: message.username,
  //text: message.text,
  //roomname: message.roomname

// var message = {
//   username: 'Mel Brooks',
//   text: 'It\'s good to be the king',
//   roomname: 'lobby'
// };





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