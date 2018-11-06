//引入解析模块以及模板模块
var fs = require('fs');
var http = require('http');
var template = require('art-template');


//使用http模块创建服务,并
var server = http.createServer().listen('3333',function(){
	console.log('http启动成功，正在监听3333端口');
});	

//绑定request请求事件
server.on('request',function(req,res){

	var templatePath = './tpl.html';

	// 使用fs进行模板读取
	fs.readFile(templatePath, function (error,data) {
		//readFile读取到的数据时二进制数据。
		//所有需要将二进制转为字符串数据，使用toString()方法
		data = data.toString();
		//模板引擎接收的是字符串数据。
		var result = template.render(data,{
			// {{ title }}
			title:'个人信息',
			// {{ name }}
			name:'John',
			// {{ age }}
			age:22,
			// {{ province }}
			province:'上海',
			// {{each hobbies}} {{ $value}} {{/each}}
			// {{each 数组名}} {{ $value }} {{/each}}
			hobbies:[
				'写代码',
				'听音乐',
				'看电视'
			]
		});
		res.end(result);
	});
});
