module.exports = (app) => {
  
  var bodyParser = require('body-parser'),
      urlencodedParser = bodyParser.urlencoded({extended: false});
  
  app.get('/', (req, res) => {
    res.render('index', {thisPage: 'index'});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });

  app.get('/contacts', (req, res) => {
    res.render('contacts', {qs: req.query});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
    console.log(req.body);
  });

  app.post('/contacts', urlencodedParser, (req, res) => {
    res.render('contacts', {qs: req.query});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
    console.log(req.body);
  });

};