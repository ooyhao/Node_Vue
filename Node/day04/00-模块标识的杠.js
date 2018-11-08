var fs = require('fs');

//文件从操纵的API是异步操作。
//模块 ./是不可省略的
var foo = require('./data/foo.js');

//文件 ./是可以省略的
fs.readFile('data/a.txt',function(error,data){
	if(error){
		console.log('读取失败');
	}else{
		console.log(data.toString());
	}
});

