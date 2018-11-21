
'use strict';
var mongoose = require('mongoose');
var taskSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_id: {
    type: String,
  },
  name: {
    type: String,
  },
  description : {
    type: String,
  },
  date_time : {
    type: String,
  }
});

mongoose.model('Task', taskSchema);