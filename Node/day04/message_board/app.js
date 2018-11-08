
// 引入express框架
var express = require('express');
// 引入post参数解析
var bodyParser = require('body-parser');
// 创建应用服务器
var app = express();

// 监听端口号
app.listen(3333,function(){
  console.log('App is running at port 3333');
});

//开放公共资源
app.use('/public/',express.static('./public/'));

// app.use([path,] callback [, callback…]) 
// 用于加载中间件，或在指定[path]匹配时加载callback中间件。

// -----------------------------------------
// Express框架，配置使用art-template模板引擎
// 第一个参数，表示当渲染以.html文件结尾的时候，使用art-template模板引擎。
// express-art-template 是专门用来在Express中把art-template模板引擎整合到express中。
// 虽然外面不需要引用 art-template,但是也必须安装 。
// 原因在于：express-art-template 依赖了 art-template;
// ----------------------------------------
app.engine('html',require('express-art-template'));


// -----------------------------------------
// 配置body-parser 中间件（插件，专门用于解析post请求体）
// -----------------------------------------
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());


// -----------------------------------------
// 处理请求
// res.redirect([status,] path) 用于重定向
// res.render(view [, locals] [, callback])  返回视图
// res.send([body])   返回http响应
// -----------------------------------------
app.get('/',function(req,res){
  res.render('index.html',{
    comments:comments
  });
});

app.get('/post',function(req,res){
  res.render('post.html');
});

app.post('/post',function(req,res){
  var comment = req.body;
  comment.dateTime = getNow();
  comments.unshift(comment);
  res.redirect('/');
});


function getNow(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var time = 
    (year)+'-'
    +((month>9)?month:('0'+month))+'-'
    +((day>9)?day:('0'+day))+' '
    +((hour>9)?hour:('0'+hour))+':'
    +((minute>9)?minute:('0'+minute))+':'
    +((second>9)?second:('0'+second));
      return time;
}



// ----------------------------------------
// 模拟数据
// ----------------------------------------

var comments = [
  {
    name:'张三1',
    message:'今天天气真好!',
    dateTime:'2018-11-08 11:11:11'
  },{
    name:'张三2',
    message:'今天天气真好!',
    dateTime:'2018-11-08 11:11:11'
  },{
    name:'张三3',
    message:'今天天气真好!',
    dateTime:'2018-11-08 11:11:11'
  },{
    name:'张三4',
    message:'今天天气真好!',
    dateTime:'2018-11-08 11:11:11'
  },{
    name:'张三5',
    message:'今天天气真好!',
    dateTime:'2018-11-08 11:11:11'
  },
];

