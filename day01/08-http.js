var http = require("http");

var server = http.createServer();

server.listen("3333",function () {
    console.log("http服务器创建成功，正在监听3333端口号：");
});
server.on("request",function (req,res) {
    //在服务器默认发送的数据是utf-8，但是浏览器不知道是utf-8。
    //浏览器在不知道服务器响应内容的编码情况下，会按照当前系统的默认编码去解析，
	//中文操作系统，默认是gbk
	//解决方法：正确的告诉浏览器我给你发送的内容是什么编码。
	// 在http协议中，Content-Type就是用来告知对方我给你发送的数据内容是什么类型。
	if(req.url === "/plain"){
		res.setHeader("Content-Type","text/plain;charset=utf-8");
		res.end("Hello 世界");
	}else if(req.url === '/html'){
		res.setHeader('Content-Type','text/html;charset=utf-8');
		res.end('<h1>Hello Node js 中国</h1>');
	}

});