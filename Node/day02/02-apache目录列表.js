
//引入核心模块
var http = require("http");
var fs = require("fs");


//创建http服务
var server = http.createServer();

//3.绑定端口号，启动服务
server.listen('3333',function(){
	console.log('server is running, at 3333 ');
});


var wwwDir = "D:/Node_Vue/day02/www";
server.on('request',function(req,res){
	var url = req.url;
	fs.readFile("./template.html", function(error,data){
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
			var content = '';
			files.forEach(function(item,index,array){
				// 在es6的``字符串，可以使用${}来引用变量
				content += `
					<tr>
			            <td data-value="apple/"><a class="icon dir" href="D:/Node_Vue/day02/www/apple/">${item}/</a></td>
			            <td class="detailsColumn" data-value="0"></td>
			            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
		            </tr>
				`;
			});
			// 转为字符串
			data = data.toString();
			// 替换
			data = data.replace('^_^',content);
			// 返回给页面
			res.end(data);
		});
	
	});

});
