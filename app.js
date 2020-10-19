var http = require('http');

http.createServer((req, res) => {
    res.end('hollo world')
}).listen(3000);