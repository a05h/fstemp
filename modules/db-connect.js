module.exports = () => {
  
  var mongoose = require('mongoose');
  
  mongoose.connect('...');
  
  var mainSchema = new mongoose.Schema({
    item: String
  });
  
  // Article collection...
  
};