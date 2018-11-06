//1.引入http核心模块
var http = require("http");

//2.通过http核心模块，创建http服务
var server = http.createServer();

//3.使用server服务监听端口
server.listen("3333",function () {
   console.log("服务器创建成功，正在监听3333端口");
});

//4.通过server接收http请求
server.on('request',function (req,res) {
    var url = req.url;
    console.log(url);
    // res.write(url);
    // res.end();
    
    res.end(url);
});
