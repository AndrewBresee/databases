var models = require('../models');
var dbConnection = require();

module.exports = {
  messages: {
    get: function (req, res) {
       // a function which handles a get request for all messages

    },
    post: function (req, res) {
      // a function which handles posting a message to the database

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

//server/controllers/index.js defines the messages and users controllers that your application will use.
// Skeletons of the controllers have already been created but you'll have to write out the details 
//for their methods
