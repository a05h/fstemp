var http = require('http');
var fs = require('fs');


var server = http.createServer((req, res) => {
  console.log('Request: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('index');
});

server.listen(3000, '127.0.0.1');
console.log('Listening port: 3000');
