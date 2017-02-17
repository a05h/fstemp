var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fstemp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB: Connection error:'));
db.once('open', function() {
  console.log("DB: Connected succesfully to server");
});

module.exports = mongoose;
