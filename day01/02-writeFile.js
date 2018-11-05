var fs = require("fs");
fs.writeFile("./data/write.txt","你好，我是nodejs，这是测试nodejs写文件",function (error) {
    if(error){
        console.log("写文件失败！"+error);
    }else{
        console.log("写文件成功！");
    }
});