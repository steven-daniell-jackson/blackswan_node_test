'use strict';
var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var appFunctions = require('../functions/app-functions');

exports.get_Tasks = function(req, res) {
  Task.find({}, function(err, Task) {
    if (err)
      res.send(err);
    res.json(Task);
  });
};

exports.create_Task = function(req, res) {
  var new_Task = new Task({
    user_id: req.params.user_id,
    name: req.body.name,
    description: req.body.description,
    date_time: appFunctions._getDateTime()
  });

  new_Task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};

exports.update_Task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.task_id}, req.body, function(err, Task) {
    if (err)
      res.send(err);
    res.json(Task);
  });
};

exports.get_Task = function(req, res) {
  Task.findById({_id: req.params.task_id}, function(err, Task) {
    if (err)
      res.send(err);
    res.json(Task);
  });
};


exports.delete_Task = function(req, res) {
  Task.deleteOne({_id: req.params.task_id}, function(err, Task) {
    if (err)
      res.send(err);
    res.json(Task);
  });
};