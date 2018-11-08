var fs = require('fs');

//文件从操纵的API是异步操作。
//模块 ./是不可省略的
var foo = require('./data/foo.js');

//（相对路径）文件 ./是可以省略的
// fs.readFile('./data/a.txt',function(error,data){
fs.readFile('data/a.txt',function(error,data){
	if(error){
		console.log('读取失败');
	}else{
		console.log(data.toString());
	}
});

//(绝对路劲) 到当前文件所在的磁盘根目录下找data/a.txt; 即：C:data/a.txt;
fs.readFile('/data/a.txt',function(error,data){
	if(error){
		console.log('读取失败'+error);
	}else{
		console.log(data.toString());
	}
});

