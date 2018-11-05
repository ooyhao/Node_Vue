var fs = require("fs");

//异步回调方式读取文件
/*
fs.readFile("./data/read.txt",function (error,data) {
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
});
console.log("end");
*/
/*
end
你好，nodejs
测试nodejs读取文件
*/

//使用同步方式读取文件
var fs = require("fs");
var data = fs.readFileSync("./data/read.txt","utf-8");
console.log(data);
console.log("end");
/*
你好，nodejs
测试nodejs读取文件
end*/

