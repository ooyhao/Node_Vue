//导入mysql包
var mysql = require('mysql');

//1.创建连接
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'nodejs'
});

//2.连接数据库
connection.connect();

//3.执行数据库操作

//查询数据
connection.query('select * from users ', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

//新增数据
/*connection.query('insert into users (username,password) values ("贾宝玉","123456")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});*/


//修改数据
/*connection.query('update users set username = "林黛玉", password = "123456" where id = 1 ', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
*/

//删除数据
/*connection.query('delete from users where id = 1 ', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});*/

//关闭数据库连接
connection.end();


