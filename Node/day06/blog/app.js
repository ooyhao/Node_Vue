//引入依赖
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
//引入路由
var router = require('./router.js');

//开放公共资源 
app.use('/public/',express.static(path.join(__dirname,'./public/')));

app.use('/node_modules',express.static(path.join(__dirname,'./node_modules/')));

//配置中间件(配置解析表单post请求体插件，一定需要在app.use(router)之前)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// 
app.engine('html',require('express-art-template'));

app.set('views',path.join(__dirname,'./views/'));



//在 Express这个框架中，默认不支持Session和Cookie
// 但是我们可以使用第三方中间件，express-session来解决。
// npm install express-session
// 配置 （一定要在app.use(router)之前）
// 使用
//	当把这个插件配置好之后，我们就可以通过req.session来访问和设置session的成员。
// 添加session数据  req.session.foo = 'bar';
// 访问session数据  var foo = req.session.foo;
app.use(session({
	//配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
	//目的是为了增加安全性
	secret:'keyboard cat',
	resave:false,
	//无论是否使用session，都默认直接给一个sessionId
	saveUninitialized:true
}));


//将路由挂载到app中
app.use(router);


//监听端口
app.listen(3333,function(){
	console.log('app is running at port 3333 ');
});















