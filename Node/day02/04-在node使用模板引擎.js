//art-template,不仅可以在浏览器使用，也可以在服务端node中使用

//在node中使用art-template

//模板引擎最早诞生于服务器端，后来发展的前端，

// 步骤：
// 1,使用npm install art-template进行安装、
// 2,在需要使用的文件模块中加载art-template
// 		只需要使用require('art-template');参数中的名字就是下载的包的名字。
// 3,查文档，使用模板引擎的API

//直接使用art-template名字就可以
var template = require('art-template');

var tpl = `
	<!DOCTYPE html>
	<html>
	<head>
	<title></title>
	</head>
	<body>
		<p>姓名：{{ name }}</p>
		<p>年龄：{{ age }}</p>
		<p>籍贯：{{ province }}</p>
		<p>我的爱好：{{each hobbies}}{{ $value }} {{/each}}</p>
	</body>
	</html>
`;

// 将模板源代码编译成函数并立刻执行
var ret = template.render(tpl, {
	name : 'ouYang',
	age : 22,
	province:'江西省',
	hobbies:['写代码','打游戏','听音乐']
});

console.log(ret);
