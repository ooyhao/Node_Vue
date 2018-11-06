
//引入核心模块
var http = require("http");
var fs = require("fs");
var template = require('art-template');


//创建http服务
var server = http.createServer();

//3.绑定端口号，启动服务
server.listen('3333',function(){
	console.log('server is running, at 3333 ');
});


var wwwDir = "D:/Node_Vue/day02/www";
server.on('request',function(req,res){
	var url = req.url;
	fs.readFile("./template-apache.html", function(error,data){
		if(error){
			res.end("404 Not Found");
			return;
		}
		//1.如何得到wwwDir目录列表中的文件名和目录名
		//	fs.readdir();
		//2.如何将得到的文件名和目录名换到template.html中。
		//	模板引擎 
		//读取指定目录，第一个 参数为路径，第二个为回调函数
		fs.readdir(wwwDir,function(error,files){
			if(error){
				res.end("can not find www dir ");
			}
			// 转为字符串
			data = data.toString();
			//这里只需要使用模板引擎解析替换data中的模板字符串就可以了。
			//数据就在files里。
			//然后在template.html中编写模板语法即可。
			var htmlStr = template.render(data,{
				title:'文件列表',
				files:files
			});

			// 返回给页面
			res.end(htmlStr);
		});
	
	});

});
