// app application
//把当前模块的依赖项都声明在文件的最上面

//为了让结构清晰，让html放在views文件夹中。

var http = require('http');
var fs = require('fs');


//简写方式
http.createServer(function(req,res){
	var url = req.url;
	if(url === '/'){
		fs.readFile('./views/index.html',function(error,data){
			if(error){
				res.end('404 not found');
			}
			res.end(data);
		});
	}
}).listen(3333,function(){
	console.log("server is running at 3333");
});
