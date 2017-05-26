module.exports = (app) => {
  
  var bodyParser = require('body-parser'),
      urlencodedParser = bodyParser.urlencoded({extended: false}),
      dbConnect = require('./db-connect');
  
  app.get('/', (req, res) => {
    res.render('index', {thisPage: 'index'});
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });

  app.get('/index', (req, res) => {
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
  
  app.get('*', (req, res) => {
    res.render('404');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });

  
};