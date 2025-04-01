//1. Importing http library/
const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

//2. Set the hostname and port.
const hostname = '127.0.0.1'; //127.0.0.1 = localhost (your computer hosting the server, it's the ip of your computer)(you can use either one).
const port = 3000; //port = can be 3000, 30001, 8000, 8001 (doesn't matter as long as it's an open port).

//3. Create a new server with createServer().
const server = createServer(function(req, res){
    //Use fs to get the index.html file and return it in the response
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf-8', function(error, data){
        if (error) {
            console.log('File cannot be found :/');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('File not found.');
            return;
        };
        res.statusCode = 200;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(port, hostname, function() {
    console.log('my_app server is running on port:', port);
});