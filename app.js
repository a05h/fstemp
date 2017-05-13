var http = require('http');
var fs = require('fs');
var router = require('./modules/router.js');


var server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
    case '/index':
      res.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/public/index.html').pipe(res);
      break;
    case '/contacts':
      res.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/public/contacts.html').pipe(res);
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/public/404.html').pipe(res);
      break;
  }
  console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  
}).listen(3000, '127.0.0.1');

console.log('Listening port: 3000');