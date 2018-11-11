// 由于业务简单，所以将所有的路由都放在一个文件中编写。


var express = require('express');

var router = express();

var md5 = require('blueimp-md5');

var User = require('./models/user.js');

router.get('/',function(req,res){
	// console.log(req.session.user);
	res.render('index.html',{
		user:req.session.user
	});
});

//登录
router.get('/login',function(req,res){
	res.render('login.html');
});


router.post('/login',function(req,res){
	var body = req.body;

	var email = body.email;
	var password = md5(md5(body.password));
	User.findOne({
		email:email,
		password:password
	},function(err,user){
		if(err){
			return res.status(500).json({
				err_code:500,
				message:err.message
			});
		}

		if(!user){
			return res.status(200).json({
				err_code:1,
				message:'email or password is invalid'
			});
		}

		req.session.user = user;

		return res.status(200).json({
				err_code:0,
				message:'OK'
			});

	});
});


//退出
router.get('/logout',function(req,res){
	req.session.user = null;
	res.redirect('/login');
});




//注册
router.get('/register',function(req,res){
	res.render('register.html');
});

router.post('/register',function(req,res){
	//注册
	var body = req.body;

	//判断用户是否存在
	//存在，你可以注册
	User.findOne({
		$or:[
			{
				email:body.email
			},{
				nickname:body.nickname
			}
		]
	},function(error,data){
		if(error){
			return res.status(500).json({

				err_code:500,
				message:'Internal error'				
			});
		}
		if(data){
			//email或者nickname已经存在
			// res.status(200).send('email or nickname alreay exists.');
			return res.status(200).send({
				err_code:1,
				message:'Email or nickname alreay exists'
			});
		}
		/*res.status(200).send(JSON.stringify({
			success:true
		}));*/
		//为了加密安全，采用两次加密
		body.password = md5(md5(body.password));
		var user = new User(body);
		user.save(function(error){
			if(error){
				return res.status(500).json({
					err_code:500,
					message:'Internal error'				
				});
			}

			//注册成功，使用session记录用户的登录状态	
			req.session.user = user;

			// 该方法接受一个对象作为参数，它会自动把对象转为字符串发送给浏览器
			return res.status(200).json({
				err_code:0,
				message:'Ok'
			});
		});
	});

});




module.exports = router;

