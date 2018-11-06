var fs = require("fs");
//读取文件路径
fs.readdir("D:/Node_Vue/day02/www", function(error,data){
	// console.log(error);
	data.forEach(function(element,index,array){
		console.log(index+"--"+element);
	});

});
