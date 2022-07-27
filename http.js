const http = require('http')
const fs = require('fs')
var url = require('url');

const server = http.createServer()

server.on('request', function(req,res) {
     // 解析请求，包括文件名
   const pathname = url.parse(req.url).pathname;
   const postfix = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   // 从文件系统中读取请求的文件内容
   fs.readFile(__dirname+pathname, function (err, data) {
      if (err) {
         console.log(err);
        // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
      }else{            
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         if(postfix==='html'){
            res.writeHead(200, {'Content-Type': 'text/html'});   
         }else if(postfix==='css'){
            res.writeHead(200, {'Content-Type': 'text/css'});
         }
         else if(postfix==='js'){
            res.writeHead(200, {'Content-Type': 'application/javascript'});
         }else{
         }
         // 响应文件内容
         res.write(data.toString());       
      }
      //  发送响应数据
      res.end();
   });
})

server.listen(8111, function() {
    console.log('http server running at port 8111')
})