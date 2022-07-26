const fs = require('fs')

fs.readFile(__dirname+'/ajax.js','utf-8',function(err,data){
    if (err) {
        return console.log('文件读取失败'+err)
    }
    console.log('文件读取成功'+data)
})

fs.writeFile(__dirname+'/out.txt','test','utf-8',function(err){
    if (err) {
        return console.log('写入失败'+ err)
    }
    console.log('写入成功')
})