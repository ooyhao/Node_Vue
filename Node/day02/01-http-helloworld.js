//引入核心模块
var http = require("http");
var fs = require("fs");
//创建http服务
var server = http.createServer();

//3.绑定端口号，启动服务
server.listen('3333',function(){
	console.log('server is running at 3333 ');
});
//如果一个请求的过程中，已经响应了，则不能重复响应。
//一个请求一个响应，没有请求没有响应。
/*server.on('request',function(req,res){
	var url = req.url;
	if(url === '/'){
		res.end('hello world');
	}else{
		res.end('404 not found');
	}
	console.log(req.url);
});*/

//模拟简单Apache服务器
var baseDir = "./www";
server.on('request',function(req,res){
	var url = req.url;

	if(url === '/'){
		url = "/index.html";
	}
	var path = baseDir + url;
	

	fs.readFile(path, function(error,data){
		if(error){
			res.end("404 Not Found");
		}else{
			res.end(data);
		}
	});

});

