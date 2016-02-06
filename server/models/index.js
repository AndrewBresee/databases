var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {

    }, // a function which produces all the messages
    post: function (res,cb) {
      cb(res.body);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

//server/models/index.js defines the messages and users models that your application will use. 
//Skeletons of the models have already been created but you'll have to write out the details for their methods
//Get and post will go to our mySQL database
