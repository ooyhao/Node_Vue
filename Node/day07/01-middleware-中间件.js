var express = require('express');



var app = express();

//中间件：处理请求的，本质是一个函数


//在Express中，对中间件有几种分类。

//当请求进来，会从第一个中间件开始进行匹配
	//如果匹配，则进来
		//如果请求进入中间件之后，没调用next()则会停在当前中间件。
		//如果调用了next则会继续向后找到第一个中间件。
	//如果不匹配，则继续判断匹配下一个中间件

//不关心请求路径和请求方法的中间件，
// 也就是说任何请求都会进入这个中间件 

//中间件本身是一个方法，该方法接收三个参数，
// 	Request 请求对象
//  Response 响应对象 
//  next  下一个中间件(调用下一个匹配的中间件)
/*
app.use(function(req,res,next){
	console.log('1 请求进来了。');
	//当一个请求进入一个中间件之后，如果不调用next，则会停留在当前中间件。
	//所以next是一个方法，用来调用下一个中间件。
	next();
});

app.use(function(req,res,next){
	console.log('2 请求进来了。');
	next();
});

app.use(function(req,res,next){
	console.log('3 请求进来了。');
});
*/

// 如果没有匹配的中间件，express会默认输出can not get/post
//严格匹配请求方法和请求路径的中间件
/*app.get();
app.get('',function(req,res,next){})




app.post();*/

//以/开都就可以。
app.use('/',function(req,res,next) {
	console.log('1');
	next();
})
//以 /xxx开头的路径中间件
app.use('/a',function(req,res,next){
	console.log(req.url);
});






app.listen(3333,function() {

});


