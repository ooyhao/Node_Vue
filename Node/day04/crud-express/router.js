//导入第三方模块
var express = require('express');
//导入核心模块
var fs = require('fs');

var student = require('./student.js');

var router = express();

router.get('/students',function(req,res){
	student.find(function(error,data){
		if(error){
			console.log(error);
			res.status(500).send('server error');
		}else{
			res.render('index.html',{
				person:person,
				students:data,
			});
		}
	});
});


/*router.get('/students',function(req,res){
    var studentsDB;
	fs.readFile('./db.json', 'utf8', function(err,data){
		studentsData = JSON.parse(data);
		studentsDB = studentsData.students;
		if(err){

		}else{
			res.render('index.html',{
				person:person,
				students:studentsDB,
			});
		}
	});
});
*/

router.get('/student',function(req,res){
	var id = req.query.id;
	// 
	if(id == null || id == '' || id.trim() == '' ){
		student.find(function(error,data){
			if(error){
				console.log(error);
				res.status(500).send('server error');
			}else{
				res.render('index.html',{
					person:person,
					students:data
				});
			}
		});
	}else{
		student.findById(parseInt(id),function(error,data){
		if(error){
			console.log(error);
			res.status(500).send('server error');
		}else{
			res.render('index.html',{
				person:person,
				student:data,
			});
		}
	});
	}
	
});


router.get('/student/add',function(req,res){
	res.render('add.html');
});


router.post('/student/add',function(req,res){

	var stu = req.body;
	student.save(stu,function(error){
		if(error){
			console.log(error);
			res.status(500).send('server error');
		}else{
			res.redirect('/students');
		}
	});
	
	
});
/*router.post('/student/add',function(req,res){
	var studentsDB;
	fs.readFile('./db.json', 'utf8', function(err,data){
		studentsData = JSON.parse(data);
		studentsDB = studentsData.students;
		if(err){

		}else{
			var student = req.body;
			student.id = 10;
			studentsDB.unshift(student);
			var stu = {};
			stu.students = studentsDB;
			fs.writeFile('./db.json',JSON.stringify(stu),'utf8',function(err){
				if(err){

				}else{

				}
			});

			res.redirect('/students');
		}
	});
});*/


router.get('/student/del/:id',function(req,res){
	var id = req.params.id;
	student.deleteById(id,function(error){
		if(error){
			console.log(error);
			res.status(500).send('server error');
			return;
		}
		res.redirect('/students');
	});
});
/*router.get('/student/del/:id',function(req,res){
	//拿到传递过来的id
	var id = req.params.id;
	console.log(id);
	var studentsDB;
	//读取json文件
	fs.readFile('./db.json', 'utf8', function(err,data){
		studentsData = JSON.parse(data);
		studentsDB = studentsData.students;
		if(err){

		}else{
			// console.log(studentsDB);
			var studentsWrite = [];
			studentsDB.forEach(function(ele,index,arr){
				if(ele.id != id){
					console.log('id:'+ele.id);
					studentsWrite.push(ele);
					
				}
			});
			var stu = {};
			stu.students = studentsWrite;
			fs.writeFile('./db.json',JSON.stringify(stu),'utf8',function(error){
				if(error){
				}else{
					res.redirect('/students');
					console.log("hahahha");
				}
			});
		}
	});
});*/

router.get('/student/edit',function(req,res){
	console.log(req.query.id);
	var id = req.query.id;
	student.findById(id,function(error,data){
		if(error){
			console.log(error);
			res.status(500).send('server error');
		}else{
			res.render('edit.html',{
				student:data
			});
		}
	});

});


router.post('/student/edit',function(req,res){

	console.log(req.body);

	var stu = req.body;
	student.update(stu,function(error){
		if(error){
			console.log(error);
			res.status(500).send('server error');
		}else{
			res.redirect('/students');
		}
	});


});




var person = [
	{
		name:'贾宝玉',
		img:'/public/img/贾宝玉.jpg',
		nickName:'JiaBaoYu'
	},{
		name:'林黛玉',
		img:'/public/img/Lindaiyu.jpg',
		nickName:'LinDaiYu'
	},{
		name:'薛宝钗',
		img:'/public/img/薛宝钗.jpg',
		nickName:'XueBaoChai'
	}
];

module.exports = router;
