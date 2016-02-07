var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
       models.messages.get( function(err, result) {
         if (err) {
           throw err;
         }
         res.json(result);
       });    
     },
    post: function (req, res) {
      var params = [req.body.username,req.body.roomname,req.body.message];
      models.messages.post(params, function(err, result) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
        models.users.get( function(err, result) {
          if (err) {
            throw err;
          }
          res.json(result);
        });    
      },
    post: function (req, res) {
      var params = [req.body.username];
      models.user.post(params, function(err, result) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    }
  }
};

//server/controllers/index.js defines the messages and users controllers that your application will use.
// Skeletons of the controllers have already been created but you'll have to write out the details 
//for their methods
