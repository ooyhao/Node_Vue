
var student = require('./student.js');

/*
student.find(function(error,data){
	if(error){
		console.log(error);
	}else{
		console.log(data);
	}
});

*/

/*student.findById(3,function(error,data){
	if(error){
		console.log(error);
	}else{
		console.log(data);
	}
});*/


student.deleteById(10,function(error){
	if(error){
		console.log(error);
	}else{
		console.log('删除成功');
	}
});