// 在se6中 新增了一个API。
// promise是一个构造函数。

var fs = require('fs');
// 创建promise容器，
// 1.给别人一个承诺。
// Promise容器一旦创建，就开始执行里面的代码。function.
// Promise容器本身不是异步的，但是它里面的任务往往都是异步的。

// resolve 解决， reject 拒绝 
var p1 = new Promise(function(resolve,reject){
	fs.readFile('./a.txt', 'utf8', function(error,data){
		if(error){
			//失败了，promise容器中的任务失败了。
			reject(error);
			// 这里调用的reject方法实际上就是then方法里面传递的第二个function
			//把容器的Pending 状态变成 Rejected状态
		}else{
			//promise容器中的任务成功了。
			resolve(data);
			//这里调用的resolve方法实际上就是then方法传递的第一个function
			//把容器的Pending状态变成 resolved状态
		}
	});
});

var p2 = new Promise(function(resolve,reject){
	fs.readFile('./b.txt', 'utf8', function(error,data){
		if(error){
			reject(error);
		}else{
			resolve(data);
		}
	});
});


var p3 = new Promise(function(resolve,reject){
	fs.readFile('./c.txt', 'utf8', function(error,data){
		if(error){
			reject(error);
		}else{
			resolve(data);
		}
	});
});

//当p1成功，然后做指定的操作
//then方法接受的 function就是容器中的resolve函数。
p1.then(function(data){
	console.log(data);
	//当return一个promise对象的时候，后续的then中的第一个function会作为p2的resolve方法
	return p2;
	//当p1读取成功的时候
},function (error) {
	console.log('文件读取失败了：'+error);
})
.then(function(data){
	console.log(data);
	return p3;
},function(error){
	console.log('文件读取失败了：'+error);	
})
.then(function(data){
	console.log(data);
},function(error){
	console.log('文件读取失败了：'+error);
})
;
