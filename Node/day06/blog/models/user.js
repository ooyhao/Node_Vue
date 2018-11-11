var mongoose = require('mongoose');
//获得Schema
var UserSchema = mongoose.Schema;
//连接数据库
mongoose.connect('mongodb://localhost/blog');

//设计数据表
var userSchema = new UserSchema({
	email:{
		type:String,
		required:true
	},
	nickname:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	created_time:{
		type:Date,
		//注意：这里不要写Date.now()，因为这样会即刻进行调用。
		//这里直接给了一个方法，Date.now
		//当你去new model 的时候，如果没有传递create_time,mongoose就会调用default指定的Date.now()方法，
		//使用其返回值作为默认值。
		default:Date.now
	},
	last_modified_time:{
		type:Date,
		default:Date.now
	},
	avatar:{
		type:String,
		default:'/public/img/avatar-default.png'
	},
	bio:{
		type:String,
		default:''
	},
	gender:{
		type:Number,
		enum:[-1,0,1],
		default:-1
	},
	birthday:{
		type:Date,
	},
	status:{
		type:Number,
		//0 无权限限制
		//1 不可以评论
		//2 不可以登录
		//是否可以评论
		//是否可以登录使用
		enum:[],
		default:0
	}
});

//发布为一个模型
var User = mongoose.model('User',userSchema);

module.exports = User;










