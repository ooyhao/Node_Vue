//导入操作数据库的模块
var mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/ouYang')

//获得Schema构造函数
var Schema = mongoose.Schema;
//实例化Schema并且设计文档结构
var studentSehema = new Schema({
	name:{
		type:String,
		require:true
	},
	gender:{
		type:Number,
		enum:[0,1],//枚举，只能是0/1
		default:0
	},
	age:{
		type:Number
	},
	hobbies:{
		type:String
	}
});

module.exports = mongoose.model('Student',studentSehema);
