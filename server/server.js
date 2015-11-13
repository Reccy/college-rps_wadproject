//Requires for node.js modules
//node.js is not yet configured! Run this from the index.html file

var http = require('http');
var fs = require('fs');

//Read file and create the server
fs.readFile('./client/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
    }).listen(process.env.PORT, process.env.IP);
});

//Log that the server is running
console.log('Server running!');