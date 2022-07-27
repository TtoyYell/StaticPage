const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', function(req,res) {
    console.log('someone vist server')
    const url = req.url
    if (url === '/' && req.method == 'GET')
    {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('success 访问成功')
        console.log('success')
    } else if (url === '/map') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        fs.readFile(__dirname+'/Map.html','utf-8',function(err,data){
            if (err) {
                return console.log('读取失败'+err)
            }
            res.write(data);
            res.end();
            console.log('访问了map')
        })
    }
})

server.listen(8111, function() {
    console.log('http server running at port 8111')
})