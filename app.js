var http = require('http'),
    express = require('express'),
    route = require('./modules/router'),
    dbConnect = require('./modules/db-connect');

var fs = require('fs');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//app.use(require('node-sass-middleware')({
//  src: path.join(__dirname, 'stylesheets'),
//  indentedSyntax: true
//}));
//app.use(express.static('./public'));



dbConnect();
route(app);

app.listen(3000);
console.log('Listening port: 3000');
