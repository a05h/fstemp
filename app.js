var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {thisPage: 'index'});
  console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
});

app.post('/contacts', urlencodedParser, (req, res) => {
  res.render('contacts', {qs: req.query});
  console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  console.log(req.body);
});

app.listen(3000, '127.0.0.1');

console.log('Listening port: 3000');