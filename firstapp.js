<<<<<<< HEAD
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

// adding comment
//comment 12:35am 5/13/2019
//comment 12:39am 5/13/2019
//cloned for org check
=======
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

// adding comment
//comment 12:35am 5/13/2019
//comment 12:39am 5/13/2019
>>>>>>> db4174afcae8005d652e93f3eb0c2f3e893c4a19
