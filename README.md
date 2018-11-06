# Node_Vue
记录Node和Vue的练习



## Day01
1.Node 中只包含ECMAScript，不包含DOM和BOM。
2.Node 不是一门语言，也不是一个框架，是一个运行平台。
3.Node 是用来执行js代码的。

### fs核心模块
#### 读文件
~~~js
    var fs = require("fs");
    fs.readFile("./day01/01-readFile.js",function(error,data){
        //回调函数第一个参数是error
        if(error){
            console.log("读取文件失败");
        }else{
            console.log(data.toString());
        }
    });
~~~

#### 写文件
~~~js
    var fs = require("fs");
    fs.writeFile("./data/writeFile.txt","content",function(error){
        if(error){
            console.log(error);
        }
        console.log("写文件成功");
    });
~~~

### Http模块
#### http 案例
~~~js
var http = require("http");

var server = http.createServer();

server.listen("3333",function () {
    console.log("http服务器创建成功，正在监听3333端口");
});

server.on("request",function (req,res) {

    var products =[{
        name:"xiaomi2",
        price:"1999"
    },{
        name:"xiaomi5",
        price:"2999"
    },{
        name:"xiaomi8",
        price:"3999"
    }
    ];

    if(req.url === "/products"){
        res.end(JSON.stringify(products));
    }else{
        res.end("404 File Not Found!");
    }
});
~~~

#### http + fs + Content-Type
~~~js
    
    //引入两个核心模块
    var fs = require("fs");
    var http = require("http");

    var server = http.createServer();
    server.listen("3333",function(){
        console.log("server is running ... ");
    });

    server.on("request",function(req,res){
        var url = req.url;
        if(url === 'html'){
            fs.readFile("./day01/data/main.html",function(error,data){
                if(error){
                    res.setHeader("Content-Type","text/plain;charset=utf-8");
                    console.log(error);
                }else{
                    res.setHeader("Content-Type","text/html;charset=utf-8");
                    res.end(data);
                }
            });
        }else if("/jpg"){
            fs.readFile("./day01/data/Koala.jpg",function(error,data){
                if(error){
                    res.setHeader("Content-Type","text/plain;charset=utf-8");
                    res.end("读取图片失败");
                }else{
                    res.setHeader("Content-Type","image/jpeg");
                    res.end(data);
                }
            });
        }

    });
~~~

### 模块

- 1.使用exports对象定义接口
- 2.通过require来加载模块

#### 案例一：

e.js
~~~js
    var age = 10;

    function add(a,b){
        return a + b;
    }
~~~
d.js
~~~js
    var e = require("./e.js");

    console.log(e.age);
    console.log(e.add(1,3));
~~~

结果：
~~~js
D:\Node_Vue\day01\module\d.js:4
console.log(e.add(1,3));
              ^

TypeError: e.add is not a function
    at Object.<anonymous> (D:\Node_Vue\day01\module\d.js:4:15)
    at Module._compile (internal/modules/cjs/loader.js:707:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:718:10)
    at Module.load (internal/modules/cjs/loader.js:605:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:544:12)
    at Function.Module._load (internal/modules/cjs/loader.js:536:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:760:12)
    at startup (internal/bootstrap/node.js:308:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:878:3)
~~~

#### 案例一：

e.js
~~~js
    var age = 10;

    function add(a,b){
        return a + b;
    }

    exports.age = age;

    exports.add = add;
~~~

d.js
~~~js
    var e = require("./e.js");

    console.log(e.age);
    console.log(e.add(1,3));
~~~

结果：
~~~js
D:\Node_Vue\day01\module>node d.js
10
4
~~~


## Day02

###js 代码风格

 细则

- 使用两个空格 – 进行缩进
- 字符串使用单引号 – 需要转义的地方除外
- 不再有冗余的变量 – 这是导致 大量 bug 的源头!
- 无分号 – 这没什么不好。不骗你！
- 行首不要以 (, [, or ` 开头
  - 这是省略分号时唯一会造成问题的地方 – 工具里已加了自动检测！
  - 详情
- 关键字后加空格 if (condition) { ... }
- 函数名后加空格 function name (arg) { ... }
- 坚持使用全等 === 摒弃 == 一但在需要检查 null || undefined 时可以使用 obj == null。
- 一定要处理 Node.js 中错误回调传递进来的 err 参数。
- 使用浏览器全局变量时加上 window 前缀 – document 和 navigator 除外
    避免无意中使用到了这些命名看上去很普通的全局变量， open, length, event 还有 name
    当采用了无分号的代码风格的时候，只需要注意以下情况就不会出现问题了。
      当一代代码出现 （ [ `开头的时候，在前面补一个分号，可以避免一些语法错误。
      所以第三方插件可能一开始就使用分号;开头。（建议在这三种情况时，在之前加上分号（;））
    
      `是es6新加的一种字符串包裹方式，叫：模板字符串，支持换行和非常方便的拼接。
`
模拟一个简单的Apache服务器
~~~js
    //模拟简单Apache服务器
    var baseDir = "./www";
    server.on('request',function(req,res){
        var url = req.url;
    
        if(url === '/'){
            url = "/index.html";
        }
        var path = baseDir + url;
        
    
        fs.readFile(path, function(error,data){
            if(error){
                res.end("404 Not Found");
            }else{
                res.end(data);
            }
        });
    
    });

~~~





### 在node中使用art-template模板

~~~html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
</head>
<body>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>籍贯：{{ province }}</p>
    <p>我的爱好：{{each hobbies}}{{ $value }} {{/each}}</p>
</body>
</html>
~~~

js文件
~~~js
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
~~~













