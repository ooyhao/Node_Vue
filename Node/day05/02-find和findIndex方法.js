// ecmascript 6 

// find 

// findIndex

// find 接受一个方法作为参数，方法内部返回一个条件，符合该条件的元素会作为find方法的返回值返回。
/*find会遍历所有元素，执行给定的带有条件返回值的函数。*/
// 如果遍历结束，还是没有符合条件的值，那么会返回undefined。

var users = [
	{
		id : 1, name:'张三1'
	},{
		id : 2, name:'张三2'
	},{
		id : 3, name:'张三3'
	},{
		id : 4, name:'张三4'
	},{
		id : 5, name:'张三5'
	},
];

Array.prototype.myFind = function(conditionFunc){
	for (var i = 0; i < this.length; i++) {
		if(conditionFunc(this[i],i)){
			return this[i];
		}
	}
}

var res = users.myFind(function(item,index){
	return item.id == 4;
}); 

console.log(res);