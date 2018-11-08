var express = require('express');

var app = express();


var bodyParser = require('body-parser');

app.use('/public/',express.static('./public/'));

app.engine('html',require('express-art-template'));
app.listen(3333,function(){
	console.log('app is running at port 3333');
});
/*配置body-parser中间件*/
app.use(bodyParser.urlencoded({extends:false}));

app.use(bodyParser.json()); 	




var comments = [
	{
		name:'贾宝玉',
		message:'你好啊！',
		dateTime:'2018-11-01 11:11:11'
	},{
		name:'林黛玉',
		message:'你好啊！',
		dateTime:'2018-11-02 11:11:11'
	},{
		name:'薛宝钗',
		message:'你好啊！',
		dateTime:'2018-11-03 11:11:11'
	},{
		name:'袭人',
		message:'你好啊！',
		dateTime:'2018-11-04 11:11:11'
	},{
		name:'晴雯',
		message:'你好啊！',
		dateTime:'2018-11-05 11:11:11'
	},
];

app.get('/',function(req,res){

	res.render('index.html',{
		comments:comments
	});
});


app.get('/post',function(req,res){
	res.render('post.html');
});


app.post('/post',function(req,res) {
	var comment = req.body;
	comment.dateTime = getNow();
	comments.unshift(comment);
	res.redirect('/');
});

function getNow(){
	var date = new Date();
	var year = date.getFullYear();
	var month = (date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1);
	var day = date.getDate()>9?date.getDate():'0'+date.getDate();
	var hour = date.getHours()>9?date.getHours():'0'+date.getHours();
	var minute = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
	var second = date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds();

	return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;

}














