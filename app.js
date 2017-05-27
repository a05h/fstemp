var http = require('http'),
    express = require('express'),
    route = require('./modules/router'),
    dbConnect = require('./modules/db-connect');

var path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'stylesheets'),
  indentedSyntax: true
}));
app.use(express.static('./public'));



dbConnect();
route(app);

app.listen(3000);
console.log('Listening port: 3000');
