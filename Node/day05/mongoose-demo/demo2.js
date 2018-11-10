// 引入mongoose包
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

//1.连接数据库
//指定连接的数据库不一定需要存在，当插入第一条数据的时候会自动创建出来。
mongoose.connect('mongodb://localhost/itcast');

//2.设计文档结构（表结构）
//字段名称就是表结构的属性名称
// 约束的目的就是为了保证数据的完整性，不要有脏数据。
var userSchema = new Schema({
    
	username:{
		type:String,
		required:true  //必须
	},password:{
		type:String,
		require:true,
	},email:{
		type:String,

	}

});

//3.将文档结构，发布为模型
// mongoose.model方法就是讲一个文档结构发布为一个model
//		第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//					mongoose会自动将大写名词的字符串生成 小写复数 的集合名称。
//   			例如：这里的User最终会变为users集合名称。
//		第二个参数：结构schema.
//		返回值：模型构造函数
var User = mongoose.model('User', userSchema);

//-----------------------------------------------
//4.  增加数据
/*var admin = new User({
	username:'zs',
	password:'123456',
	email:'admin@admin.com'
});

admin.save(function(error,res){
	if(error){
		console.log('保存失败');
	}else{
		console.log('保存成功');
		console.log(res);
	}
});*/
//-----------------------------------------------


//-----------------------------------------------
//5.查询数据
// 查询全部
/*User.find(function(error,data){
	if(error){
		console.log('查询失败');
	}else{
		console.log('查询成功');
		console.log(data);
	}
});*/
// 按条件查询(返回的是一个数组)
/*User.find({username:'zs'},function(error,data){
	if(error){
		console.log('查询失败');
	}else{
		console.log('查询成功');
		console.log(data);
	}
});
*/

//查询到多个返回第一个，无返回null
/*User.findOne({
	username:'zs',
	password:'123456'
},function(error,data){
	if(error){
		console.log('查询失败');
	}else{
		console.log('查询成功');
		console.log(data);
	}
});*/

//-----------------------------------------------

//-----------------------------------------------
// 删除数据

/*User.remove({username:'zs'},function(error,data){
	if(error){
		console.log(error);
	}else{
		console.log('删除成功');
	}
});*/

//-----------------------------------------------

//-----------------------------------------------
// 更新数据
User.findByIdAndUpdate('5be697481e5368010c370284',{
	password:'123456789'
},function(error,data){//data是更新之前的数据
	if(error){
		console.log('更新失败');
	}else{
		console.log('更新成功');
		console.log(data);
	}
});
//-----------------------------------------------

