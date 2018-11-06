//引入os模块
//获取机器信息
var os = require("os");
//操作路径
var path = require("path");

//获取当前机器的cpu信息
console.log(os.cpus());

//获得当前机器的内存大小（字节）
console.log("memory:"+os.totalmem()/1024/1024/1024);


console.log("获取系统位置："+os.arch());
console.log("获得网卡信息：");
console.log(os.networkInterfaces());


//获得当前
console.log(path.extname("c:/q/f/e/w/q/hello.txt"));



