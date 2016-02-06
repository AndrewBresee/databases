var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
       // a function which handles a get request for all message
    },
    post: function (req, res) {
      console.log('controller');
      models.messages.post(req, function(err, result) {
        if (err) {
          console.log("ERROR ONE!!!");
          throw err;
        }
      });
        //callback will change database with dat);
      // a function which handles posting a message to the database

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      console.log('users.controller');
    }
  }
};

//server/controllers/index.js defines the messages and users controllers that your application will use.
// Skeletons of the controllers have already been created but you'll have to write out the details 
//for their methods
