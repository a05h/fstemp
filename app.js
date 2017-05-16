var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    router = require('./modules/router');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public/styles'));

//app.get('/', (req, res) => {
//  res.render('index', {thisPage: 'index'});
//  console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
//});
//
//app.get('/contacts', (req, res) => {
//  res.render('contacts', {qs: req.query});
//  console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
//  console.log(req.body);
//});
//
//app.post('/contacts', urlencodedParser, (req, res) => {
//  res.render('contacts', {qs: req.query});
//  console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
//  console.log(req.body);
//});
//

router(app);

app.listen(3000, '127.0.0.1');

console.log('Listening port: 3000');