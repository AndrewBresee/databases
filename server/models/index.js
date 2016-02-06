var db = require('../db');
var connection = db.Connection;

// exports.messagePostCB = function () {
//   console.log("SOMETHING HAPPENED OUTSIDE CALL!!");
//   ts[0]);
//     });
//   });
// };

module.exports = {
  messages: {
    get: function (res) {

    }, // a function which produces all the messages
    post: function (res,cb) {
      console.log("RES.BODY : ", res.body);
      connection.query('insert into chat.messages(user, room, message) values (?, ?, ?)', [res.body.username, res.body.roomname, res.body.message], function(err, results) {
        if(err){
          console.log("ERROR!!");
          throw err; 
        }

        console.log("SOMETHING HAPPENED INSIDE CALL!!");
        console.log(results);
        cb(err, results);
      // cb(res.body);
      });
    }
  },
   // a function which can be used to insert a message into the databas
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


//server/models/index.js defines the messages and users models that your application will use. 
//Skeletons of the models have already been created but you'll have to write out the details for their methods
//Get and post will go to our mySQL database
