//引入http核心模块
var http = require('http');
var fs = require('fs');
//通过http核心模块创建http server
var server = http.createServer();

server.listen('3333',function(){
	console.log('server is running at 3333 ....');
});

server.on('request',function(req,res){

	var url = req.url;
	if(url === '/html'){
		fs.readFile("./data/main.html", "utf-8", function(error,data){
			if(error){
				res.setHeader("Content-Type","text/plain;charset=utf-8");
				res.end("资源访问失败");
			}else{
				//通过使用text/html标识html页面
				res.setHeader("Content-Type","text/html;charset=utf-8");
				res.end(data);
			}
		});
	}else if(url === '/koala.jpg'){
		fs.readFile("./data/Koala.jpg", function(error,data){
			if(error){
				res.setHeader("Content-Type","text/plain;charset=utf-8");
				res.end("404 file not found");
			}else{
				//通过image/jpeg标识jpg图片
				res.setHeader("Content-Type","image/jpeg");
				res.end(data);
			}
		});
	}

});