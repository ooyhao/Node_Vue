

function add(a,b){
	return a + b;
}

// exports.add = add;

//如果某个模块需要直接导出，而不是挂着到exports上，可以使用module.exports;
// module.exports = '123';
// module.exports = add;
module.exports = {
	add : function(x,y){
		return x + y;
	}
}
