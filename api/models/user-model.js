
'use strict';
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  username: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  }
});

mongoose.model('User', userSchema);