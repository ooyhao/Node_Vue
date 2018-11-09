/*
	student.js
	数据操作的模块。
	职责：操作文件中的数据，只进行数据处理，不关心具体的业务。
*/

// --------------------- 
//   封装异步API.
// ---------------------


//导入文件处理的模块
var fs = require('fs');

//文件统一路径处理
var dbPath = './db.json';


/**
	获取学生列表
*/
exports.find = function(callback){
	fs.readFile(dbPath,function(error,data){
		if(error){
			return callback(error);
		}
		callback(null,JSON.parse(data).students);
	});
};



/**
	根据Id获取学生信息
*/
exports.findById = function(id,callback){
	var student = null;
	/*利用已经写好的find函数*/
	this.find(function(error,data){
		if(error){
			return callback(error);
		}
		data.forEach(function(ele,index,arr){
			if(parseInt(ele.id) == id){
				student = ele;
			}
		});
		callback(null,student);
	});
};


/**
	添加保存学生信息
*/

exports.save = function(student,callback){
	this.find(function(error,data){
		if(error){
			return callback(error);
		}
		student.id = parseInt(data[0].id) + 1;
		data.unshift(student);
		var stu = {};
		stu.students = data;
		fs.writeFile(dbPath,JSON.stringify(stu),'utf8',function(error){
			if(error){
				callback(error);
			}else{
				callback(null);
			}
		});
	});
};


/**
	更新学生
*/

exports.update = function(student,callback){

	this.find(function(error,data){
		if(error){
			return callback(error);
		}
		//通过es6中的find函数查找
		// https://www.cnblogs.com/kongxianghai/p/7527526.html
		/*var res = data.find(function(item){
			return item.id == student.id;
		});
		//遍历传递进来的对象，更新属性
		student.id = parseInt(student.id);
		for(var key in student){
			res[key] = student[key];
		}
*/
		var index = data.findIndex(function(item){
			return item.id == student.id;
		});
		data[index] = student;
		console.log(index);
		var stu = {};
		stu.students = data;
		fs.writeFile(dbPath,JSON.stringify(stu),'utf8',function(error){
			if(error){
				return callback(error);
			}
			callback(null);
		});
	});

};



/**
	删除学生
*/
exports.deleteById = function(id,callback){
	//利用find查询文件中的数据
	this.find(function(error,data){
		if(error){
			return callback(error);
		}
		var studentsDB = [];
		var stu = {};
		data.forEach(function(ele,index,arr){
			if(parseInt(ele.id) != id){
				studentsDB.push(ele);
			}
		});
		stu.students = studentsDB;
		fs.writeFile(dbPath,JSON.stringify(stu),'utf8', function(error){
			if(error){
				return callback(error);
			}
			return callback(null);
		});		
	});
};



