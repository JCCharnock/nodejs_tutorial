// const http = require("http");
// const fs = require("fs");
// const server = http
//   .createServer((req, res) => {
//     res.write(
//       "hello world from J charnock. The ??? is " + req.statusMessage
//     );
//     //send the response

//     const readStream = fs.createReadStream('./static/index.html');
//     //http status code 200 means everything went OK
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     readStream.pipe(res);
//     res.end();
//   })
//   .listen(3000);

// //listen on port 3000

const http = require("http");
const path = require("path");
var server = http.createServer(function(req, res){
    console.log('Request for ' + req.url + ' by method ' + req.method);
   if(req.method == 'GET'){
       var fileurl;
       if(req.url == '/')fileurl = '/static/index.html';
       else {
           fileurl = req.url;
       }
   }
   var filePath = path.resolve('./public'+fileurl);
   var fileExt = path.extname(filePath);
   if(fileExt == '.html'){
         fs.exists(filePath, function(exists){
       if(!exists){
         res.writeHead(404, {'Content-Type': 'text/html'});
         res.end('<h1>Error 404' + filePath + 'not found </h1>');
         //the end() method sends content of the response to the client
         //and signals to the server that the response has been sent
         //completely
         return;
       }
       res.writeHead(200, {'Content-Type':'text/html'});
       fs.createReadStream(filePath).pipe(res);
     })
   }
}).listen(3000)
