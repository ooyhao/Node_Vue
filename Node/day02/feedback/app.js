// app application
//把当前模块的依赖项都声明在文件的最上面

//为了让结构清晰，让html放在views文件夹中。

var http = require('http');
var fs = require('fs');
var template = require('art-template');

var url = require('url');

var comments = [
	{
		name:'张三1',
		message:'今天天气不错',
		dateTime:'2018-11-11'
	},{
		name:'张三2',
		message:'今天天气不错',
		dateTime:'2018-11-11'
	},{
		name:'张三3',
		message:'今天天气不错',
		dateTime:'2018-11-11'
	},{
		name:'张三4',
		message:'今天天气不错',
		dateTime:'2018-11-11'
	},{
		name:'张三5',
		message:'今天天气不错',
		dateTime:'2018-11-11'
	}
];


/*
	对于这种表单提交的请求地址，由于其中具有用户动态填写的内容。
	所以你不可能通过去判断完整的pathname路径来处理这个请求。
*/
//结论：对我们来说，只需要判断，请求路径中如果有/pinglun即可.

//简写方式
http.createServer(function(req,res){
	//使用pathname的parse方法将路径解析为一个简单的方便的操作对象。
	//第二个参数为true表示直接将查询字符串一个名为query的对象
	var parseObj = url.parse(req.url,true);
	//单独获取不包含查询字符串的路径部分
	//（该路径不包含？之后的内容（查询字符串））
	var pathname = parseObj.pathname;
	
	//访问index页面
	if(pathname === '/'){
		fs.readFile('./views/index.html',function(error,data){

			if(error){
				res.end('404 not found');
			}

			var result = template.render(data.toString(),{
				comments:comments
			});

			res.end(result);
		});
	}else if(pathname === '/post'){
		fs.readFile('./views/post.html',function(error,data){
			if(error){
				res.end('404 Not Found');
			}else{
				res.end(data);
			}
		});
	}else if(pathname === '/pinglun'){
		//注意：这个时候无论 /pinglun后面是什么都可以接受到请求了
		console.log("收到表单请求",parseObj.query);
		// res.end(JSON.stringify(parseObj.query));
		//接受到数据，需要存到数组中
		//接下来需要做的事：
			// 1.获取表单提交的数据
			// 2.生成日期添加到数据对象中，然后存储到数组中

			// 3.让用户重定向跳转到首页，我数组中的数据已经发生变化了，
			// 		所以用户看到的页面的数据也就发生了变化
		var comment = parseObj.query;
		comment.dateTime = '2018-09-06 09:09:30';
		// comments.push(comment);//从后面添加
		comments.unshift(comment);//从前面添加
		//服务端数据已经存储好了，（301永久重定向（浏览器会记忆），302临时重定向）
		//1.状态码设置为302，临时重定向、
		//2.在响应头中通过Location、告诉客户端重定向到哪里。
// 如果客户端发现响应状态码是302，就会自动到响应头中去找Location，所以就会看到客户端自动跳转。
		res.statusCode=302;
		res.setHeader('Location','/');
		res.end();
	}else if(pathname.indexOf('/public/') === 0){
		fs.readFile('.'+pathname,function(error,data){
			if(error){
				res.end('404 Not Found');
			}else{
				res.end(data);
			}
		});
	}else{
		fs.readFile('./views/404.html',function(error,data){
			if(error){
				res.end('404 page not found');
			}else{
				res.end(data);
			}
		});
	}
}).listen(3333,function(){
	console.log("server is running at 3333");
});



//Node 不适合从来没有接触过服务器的人学习。
