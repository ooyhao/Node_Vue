//在node中，每个模块内部都要一个自己的module对象。

//该module对象中有个成员加：exports，也是一个对象(空对象)

/*
var module = {
	exports:{}
};
*/
//可以看出，其实其中有一句
// var exports = module.exports;

exports.foo = "bar";

exports.add = function(x,y){
	return x + y;
}

//该表了exports的指向
exports = {};

exports.foo1 = 112;

module.exports.name = 'ouYang';

//改变了module.exports的指向
module.exports = 'new';



// 谁来require 引用我，谁就得到module.exports接口对象。
// 默认在代码的最后有一句：
// return module.exports;


