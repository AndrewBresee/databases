var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var queryString = "select messages.id, messages.message, messages.room, users.name from messages \
                        left outer join users on (messages.user = users.id) order by messages.id desc";
      db.query(queryString,function (err,results) {
        cb(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, cb) {
      var queryString = "insert into messages (user, room, message) value ( (select id from users where name = ? limit 1), ?, ?)";
      db.query(queryString, params, function(err, results) {
        cb(err, results);
      });
    }
  },
   // a function which can be used to insert a message into the databas
  users: {
    // Ditto as above.
    get: function (cb) {
      var queryString = "select * from users";
      db.query(queryString,function (err, results) {
        cb(err, results);
      });
    },
    post: function (params, cb) {
      var queryString = "insert into users (name) value (?)";
      db.query(queryString, params, function(err, results) {
        cb(err, results);
      });
    }
  }
};


//server/models/index.js defines the messages and users models that your application will use. 
//Skeletons of the models have already been created but you'll have to write out the details for their methods
//Get and post will go to our mySQL database
