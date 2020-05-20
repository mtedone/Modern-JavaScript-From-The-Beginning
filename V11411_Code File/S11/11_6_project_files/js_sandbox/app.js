const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function () {

  let users = {}; // List of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if(to) {
        // Single user message
        to.receive(message, from);
      } else {
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const marco = new User('Marco');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatRoom = new Chatroom();

chatRoom.register(marco);
chatRoom.register(jeff);
chatRoom.register(sarah);

marco.send('Hello Jeff', jeff);
jeff.send('Hello Marco', marco);
marco.send('Hi everyone');