var http = require("http");

/*
var server = http.createServer();


server.on("request",function (req,res) {

    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello Nodejs");
}).listen("3333",function () {
    console.log("创建http服务器成功，正在监听3333端口：");
});*/

http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Node.js</h1>");
    res.end("<p>Hello Node.js</p>");
}).listen("3333",function (error) {
    console.log("error:"+error);
    console.log("http服务器启动成功");
});