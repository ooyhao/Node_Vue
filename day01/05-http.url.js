//1.引入http核心模块
var http = require("http");

//2.通过http核心模块创建http服务。
var server = http.createServer();

//3.使用http服务监听指定端口号
server.listen("3333",function () {
    console.log("http服务器创建成功，正在监听3333端口号:");
});

//4.使用http服务接收http请求
server.on("request",function (req,res) {
    //根据不同的地址返回不同的数据
    var url = req.url;
    if(url === "/"){
        res.end("index page!");
    }else if(url === "/login"){
        res.end("login page");
    }else if(url === "/register"){
        res.end("register page");
    }else{
        res.end("404 Not Found!");
    }
});

