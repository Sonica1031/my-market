const http = require('http');

const hostname = '192.168.0.229';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node\n');
});

server.listen(port, hostname, () => {
  // start watching for connections on the port specified
  console.log(`Server running at http://${hostname}:${port}/`);
});