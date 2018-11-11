var express = require('express');
var fs = require('fs');
var app = express();








//以/开都就可以。
app.get('/',function(req,res,next) {
	fs.readFile('./a.txt',function(err,data){
		if(err){
			// return res.status(500).send('server error');
			next();
		}
	});
})


//以/开都就可以。
app.get('/',function(req,res,next) {
	fs.readFile('./a.txt',function(err,data){
		if(err){
			// return res.status(500).send('server error');
			//如果传递了参数，则直接去后面找四个参数的中间件。
			next(err);
		}
	});
});

//以 /xxx开头的路径中间件
app.get('/',function(req,res,next){
	console.log(2);
});

//配置错误处理中间件
app.use(function (err,req,res,next) {
	console.log('保错了');
})

app.listen(3333,function() {

});


 
