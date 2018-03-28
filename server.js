var fs = require('fs');
var url = require('url');
var http = require('http');
var page = require('./dist/page');
var server = http.createServer();

server.on('request', function(req, res){
  var location = url.parse('http://'+req.url), status = 404, content = 'Page not found.', todos = [];

  switch (location.path) {
    case '/':
      status = 200;
      content = fs.readFileSync('./index.html');
      content = content.toString().replace('<% page %>', page());
      content = content.replace('<% state %>', JSON.stringify(todos));
      break;
    case '/added':
      todos = [ 'React 애플리케이션 만들기', 'Flux 공부하기' ];
      status = 200;
      content = fs.readFileSync('./index.html');
      content = content.toString().replace('<% page %>', page(todos));
      content = content.replace('<% state %>', JSON.stringify(todos));
      break;
    case '/bundle.js':
      try {
        fs.accessSync('./dist/bundle.js');
        status = 200;
        content = fs.readFileSync('./dist/bundle.js');
      } catch(e) {
        console.log(e);
      }
  }

  res.writeHead(status);
  res.end(content);
});

server.listen(3000, '127.0.0.1', function(){
  console.log('Listening on port 3000...')
});
