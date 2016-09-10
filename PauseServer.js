var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
app.use(onRequest);
//app.use('/download', download);


//function download(request, response) {
//    console.log("user is now downloading");
    //response.attachment('yuan.jpg');
//    response.download("pictures/yuan.jpg");
//}

function onRequest(request, response) {
    console.log(request.originalUrl);
    if (request.method == 'GET' && request.originalUrl == "/yuan.jpg") {
        console.log("user is now downloading");
        response.download("pictures/yuan.jpg");
    } else {
    console.log("User on page");
    response.writeHead(200, {"Context-Type": "text/html"});
    var myReadStream = fs.createReadStream("Pause.html");
    myReadStream.pipe(response);
    }
    
}
app.use(express.static('pictures'));
app.listen(8888);
//http.createServer(onRequest).listen(8888);
console.log("server now running");