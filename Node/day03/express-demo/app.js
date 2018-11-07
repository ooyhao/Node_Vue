// 0.安装
// 1.引入包
var express = require('express');

// 2.创建服务器应用程序
// 		也就是原来的http.createServer();
// var app = express() ==> http.createServer();
var app = express();
app.get('',function(req,res){

});

//相当于server.listen();
app.listen(3333,function(){
	console.log('app is running at port 3333');
});
