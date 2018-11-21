'use strict';
var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.get_Users = function(req, res) {
  User.find({}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};


exports.create_User = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};

exports.update_User = function(req, res) {
  User.findOneAndUpdate({_id: req.params.user_id}, req.body, function(err, User) {
   console.log(req.body);
   if (err)
    res.send(err);
  res.json(User);
});
};

exports.get_User = function(req, res) {
  User.findById({_id: req.params.user_id}, function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};



