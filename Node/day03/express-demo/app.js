// 0.安装
// 1.引入包
var express = require('express');

// 2.创建服务器应用程序
// 		也就是原来的http.createServer();
// var app = express() ==> http.createServer();
var app = express();
app.get('/',function(req,res){
	res.send('Hello Express');
});

// 公开指定目录，这样就可以访问到公共的public目录了
app.use('/public/',express.static('./public/'));

//相当于server.listen();
app.listen(3333,function(){
	console.log('app is running at port 3333');
});
