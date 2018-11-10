//导入核心模块
var fs = require('fs');

var express = require('express');
var bodyParesr = require('body-parser');

var router = require('./router.js');

var app = express();

//开发公共资源
app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'));

//配置bodyParser中间件
app.use(bodyParesr.urlencoded({extended:false}));
app.use(bodyParesr.json());

//配置art-template模板引擎
app.engine('html',require('express-art-template'));

app.listen(3333,function(){
	console.log("app is running at port 3333");
});


app.use(router);


