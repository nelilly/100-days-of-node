var http = require("http");
var serverUrl = "localhost"
var port = 3020;

var server = http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(`Request: ${req.url}`);
    var html = `<p>Hello World</p>`;
    res.end(html);
});

console.log(`Listening at ${serverUrl}:${port}`);
server.listen(port, serverUrl)

// server.on('SIGTERM', () => {
//     server.close(() => {
//         console.log('Process terminated')
//     })
// })
