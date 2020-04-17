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

server.get("/edibles", (req, res) =>{
  res.status(200).send(
    {
        id: 1,
        imageSRC: '../images/gummi.jpeg',
        description: "Gummi",
        qty: 0
    },
    {
        id: 2,
        imageSRC: '../images/gummi.jpeg',
        description: "Gummi",
        qty: 0
    },
    {
        id: 3,
        imageSRC: '../images/gummi.jpeg',
        description: "Gummi",
        qty: 0
    },
    {
        id: 4,
        imageSRC: '../images/gummi.jpeg',
        description: "Gummi",
        qty: 0
    },
    {
        id: 5,
        imageSRC: '../images/gummi.jpeg',
        description: "Gummi",
    },
    {
        id: 6,
        imageSRC: '../images/gummi.jpeg',
        description: "Gummi",
        qty: 0
    }
  )
})

server.post('/edibles', (req, res) => {
  res.status(201).json({ url: '/edibles', operation: 'POST' });
});

server.put('/edibles', (req, res) => {
  res.status(200).json({ url: '/edibles', operation: 'PUT' });
});

server.delete('/edibles', (req, res) => {
  res.status(204);
});