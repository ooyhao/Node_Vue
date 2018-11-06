//1，引入http核心模块
var http = require("http");

//2，使用http核心模块创建服务
var server = http.createServer();

//3.通过服务监听端口
server.listen("3333",function () {
    console.log("服务器正在监听3333端口号：");
});

//4.通过服务配置接收请求
server.on('request',function (req,res) {
    console.log("url:"+req.url);
});


