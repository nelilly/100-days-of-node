var http = require("http");
var port = 3020;
var serverUrl = "localhost"

var server = http.createServer(function(req,res){
    console.log(`Request: ${req.url}`);
    var html = `<p>Hello World</p>`;
    res.end(html);
});

console.log(`Listening at ${serverUrl}:${port}`);
server.listen(port, serverUrl)