
var http = require("http");

var server = http.createServer();

server.listen("3333",function () {
    console.log("http服务器创建成功，正在监听3333端口");
});

server.on("request",function (req,res) {

    var products =[{
        name:"xiaomi2",
        price:"1999"
    },{
        name:"xiaomi5",
        price:"2999"
    },{
        name:"xiaomi8",
        price:"3999"
    }
    ];

    if(req.url === "/products"){
        res.end(JSON.stringify(products));
    }else{
        res.end("404 File Not Found!");
    }

});