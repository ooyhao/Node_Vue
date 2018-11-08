README.md

初始化 package.json
~~~shell
/*  使用npm init -y 跳过向导
    D:\Node_Vue\Node\day04\message_board>npm init -y
    Wrote to D:\Node_Vue\Node\day04\message_board\package.json:

    {
      "name": "message_board",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
*/
~~~

安装 express第三方包
~~~shell
D:\Node_Vue\Node\day04\message_board>npm i -S express
npm notice created a lockfile as package-lock.json. You should commit this file.

npm WARN message_board@1.0.0 No repository field.

+ express@4.16.4
added 48 packages from 36 contributors and audited 121 packages in 7.72s
found 0 vulnerabilities
~~~

安装 art-template第三方包

~~~shell
D:\Node_Vue\Node\day04\message_board>npm install -S art-template
npm WARN message_board@1.0.0 No repository field.

+ art-template@4.13.1
added 32 packages from 133 contributors and audited 161 packages in 7.317s
found 0 vulnerabilities
~~~

安装express与art-template的关联包
~~~shell
D:\Node_Vue\Node\day04\message_board>npm install -S express-art-template
npm WARN message_board@1.0.0 No repository field.

+ express-art-template@1.0.1
added 1 package and audited 162 packages in 2.577s
found 0 vulnerabilities
~~~

安装post解析工具
~~~shell
D:\Node_Vue\Node\day04\message_board>npm install -S body-parser
npm WARN message_board@1.0.0 No repository field.

+ body-parser@1.18.3
updated 1 package and audited 192 packages in 2.06s
found 0 vulnerabilities
~~~


API 参考

express()
创建一个express应用，这个express()方法是一个被express modules导出的顶级函数。
~~~js
var express = require('express');
var app = express();
~~~

方法

express.json([options])
这是一个express中的中间件功能，它使用JSON解析传入的请求，基于body-parser
express.static(root, [options])
这是一个express中的中间件功能， 提供静态文件服务，基于server-static
express.Router([options])
创建一个新的路由对象
~~~js
var router = express.Router([options]);
~~~
express.urlencoded([options])
这是一个express中的中间件功能 通过对传入的请求进行url编码，基于body-parser


Application
创建一个app对象，通过引用express应用，创建它是通过回调express()方法。
~~~js
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
~~~

事件：
app.on('mount', callback(parent))
~~~js
var admin = express();

admin.on('mount', function (parent) {
  console.log('Admin Mounted');
  console.log(parent); // refers to the parent app
});

admin.get('/', function (req, res) {
  res.send('Admin Homepage');
});

app.use('/admin', admin);
~~~

方法：
app.engine(ext, callback)
ext:文件的后缀。注册一个指定的模拟引擎

app.get(path, callback [, callback ...])
路由到一个指定路径的http GET请求。callback:回调函数
~~~js
app.get('/', function (req, res) {
  res.send('GET request to homepage');
});
~~~

app.listen(path, [callback])
开启一个unix socket并监听指定路径为其建立连接。
Starts a UNIX socket and listens for connections on the given path. 这个方法等同于Node中的 http.Server.listen().
~~~js
var express = require('express');
var app = express();
app.listen('/tmp/sock');
~~~

app.post(path, callback [, callback ...])
路由到一个指定路径的http post 请求。callback：回调函数
~~~js
app.post('/', function (req, res) {
  res.send('POST request to homepage');
});
~~~

app.put(path, callback [, callback ...])
路由到一个指定路径的http put 请求。callback：回调函数
~~~js
app.put('/', function (req, res) {
  res.send('PUT request to homepage');
});
~~~


app.render(view, [locals], callback)
返回一个渲染html的视图. 接收一个给视图的，可选的包含本地变量的对象参数  这个类似于 res.render(), 但是不能返回一个视图给客户端

~~~js
app.render('email', function(err, html){
  // ...
});

app.render('email', { name: 'Tobi' }, function(err, html){
  // ...
});
~~~


app.route(path)
返回一个单路由实例， 用于处理http. 使用 app.route() 去避免重复多次路由

~~~js
var app = express();

app.route('/events')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
})
.get(function(req, res, next) {
  res.json(...);
})
.post(function(req, res, next) {
  // maybe add a new event...
});

~~~

app.use([path,] callback [, callback...])
Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
~~~js
// GET /static/style.css etc.
app.use('/static', express.static(__dirname + '/public'));
~~~

Request

~~~js
app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});
~~~
或
~~~js
app.get('/user/:id', function(request, response) {
  response.send('user ' + request.params.id);
});
~~~

req.app
~~~js
//index.js
app.get('/viewdirectory', require('./mymiddleware.js'))
//mymiddleware.js

module.exports = function (req, res) {
  res.send('The views directory is ' + req.app.get('views'));
};

~~~

req.baseUrl

~~~js
var greet = express.Router();

greet.get('/jp', function (req, res) {
  console.log(req.baseUrl); // /greet
  res.send('Konichiwa!');
});

app.use('/greet', greet); // load the router on '/greet'
~~~
·