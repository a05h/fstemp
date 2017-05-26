module.exports = () => {

  var MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      url = 'mongodb://localhost:27017/nf';
  
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var collection = db.collection('nf');
    
    var data = {test: 'something'};
    
    //remove all data
    collection.remove({}, (err, result) => {
      if (err) throw err;
      console.log('Removed.')
    });
    
    //add data in db
    collection.insert(data, (err, result) => {
      if (err) throw err;
      
      //show data
      collection.find().toArray((err, results) => {
        console.dir(results);
        db.close();
      });
      
    });
    
    console.log("Connected correctly to server");
  });
  
  
};