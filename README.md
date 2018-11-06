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













